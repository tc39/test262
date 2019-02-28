#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const { spawn, execSync } = require('child_process');
const fetch = require('node-fetch');

const jsvu = `${process.env.HOME}/.jsvu`;
const engines = [
    { hostName: 'spidermonkey', hostType: 'jsshell', hostPath: `${jsvu}/spidermonkey` },
    { hostName: 'chakra', hostType: 'ch', hostPath: `${jsvu}/ch` },
    { hostName: 'v8', hostType: 'd8', hostPath: `${jsvu}/v8` },
    { hostName: 'javascriptcore', hostType: 'jsc', hostPath: `${jsvu}/jsc` },
];

const {
    TRAVIS_REPO_SLUG,
    GITHUB_OAUTH2TOKEN,
    TRAVIS_PULL_REQUEST_SHA,
    TRAVIS_BUILD_WEB_URL,
} = process.env;

const paths = execSync(`git diff --diff-filter ACMR --name-only -z ${process.env.TRAVIS_BRANCH} -- test/`)
    .toString().trim();

if (!paths) {
    console.log("No test files added or modified. Exiting.");
    process.exit(0);
}

console.log(`New or modified test files: \n${paths.replace(/\u0000/g, '\n')}`);

fetch(`https://api.github.com/repos/${TRAVIS_REPO_SLUG}/statuses/${TRAVIS_PULL_REQUEST_SHA}`,
    {
        method: 'POST',
        body: JSON.stringify({
            state: 'pending',
            target_url: TRAVIS_BUILD_WEB_URL,
            description: 'Running new and/or modified tests',
            context: 'continuous-integration/travis-ci/tests-execution'
        }),
        headers: { 'Authorization': `token ${GITHUB_OAUTH2TOKEN}` }
    }
).then(res => {
    const promises = [];
    for (const { hostName, hostType, hostPath } of engines) {
        const execution = spawn('test262-harness', [
            `--hostType=${hostType}`,
            `--hostPath=${hostPath}`,
            '--',
            ...paths.split('\u0000'),
        ], {
            shell: true,
            stdio: ['pipe', 'pipe', process.stderr],
        });

        const output = [];

        execution.stdout.on('data', chunk => {
            output.push(chunk);
        })

        promises.push(new Promise((res, rej) => {
            execution.on('close', code => {
                if (code === 0) {
                    res(hostName);
                } else {
                    rej([code, hostName]);
                }
            });
        }).then(name => {
            console.log(`Completed execution for ${name}`);
            const results = Buffer.concat(output).toString('utf8')
                .replace(/^PASS test\/\w.*$\n/gm, '');
            return [name, results];
        }));
    }

    return promises;
}).then(promises => {
    Promise.all(promises).then((engines) => {
        const body = engines.map(([engine, results]) =>
            `Results for ${engine}:\n${results}`).join('\n');
        console.log(body);

        const faileds = body.match(/^\d* failed$/gm);

        let state = 'success';
        let description = 'All new or modified tests are passing';

        const total = faileds
            .map(failed => Number(/\d+/.exec(failed)[0]))
            .reduce((acc, n) => acc + n);

        if (faileds.some(n => n !== '0 failed')) {
            state = 'error';
            description = `Found ${total} failures executing the tests`;
        }

        fetch(`https://api.github.com/repos/${TRAVIS_REPO_SLUG}/statuses/${TRAVIS_PULL_REQUEST_SHA}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    state,
                    target_url: TRAVIS_BUILD_WEB_URL,
                    description,
                    context: 'continuous-integration/travis-ci/tests-execution'
                }),
                headers: { 'Authorization': `token ${GITHUB_OAUTH2TOKEN}` }
            }
        ).then(res => console.log(res));
    });
}).catch((code, hostName) => {
    console.error('Failed to execute the tests!', code, hostName);
    process.exit(code);
});

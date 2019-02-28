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

const paths = execSync(`git diff --diff-filter ACMR --name-only -z ${process.env.TRAVIS_BRANCH} -- test/`)
    .toString().trim();

if (!paths) {
    console.log("No test files added or modified. Exiting.");
    process.exit(0);
}

console.log(`New or modified test files: \n${paths.replace(/\u0000/g, '\n')}`);

const promises = [];
for (const { hostName, hostType, hostPath } of engines) {
    const execution = spawn('test262-harness', [
        `--hostType=${hostType}`,
        `--hostPath=${hostPath}`,
        '--',
        'test/built-ins/Array/prototype/includes/*'
        //...paths.split('\u0000'),
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

Promise.all(promises)
    .then((engines) => {
        const body = engines.map(([engine, results]) =>
            `Results for ${engine}:\n${results}`).join('\n');
        console.log(body);

        const faileds = body.match(/^\d* failed$/gm);
        // if (faileds.some(n => n !== '0 failed')) {
        //     console.error('Failures found running tests.');
        //     process.exit(1);
        // }

        // TODO: How do we send comments to the PR on GitHub??
        const repoSlug = process.env.TRAVIS_REPO_SLUG;
        const PR = process.env.TRAVIS_PULL_REQUEST;

        fetch(`https://api.github.com/repos/${repoSlug}/issues/${PR}/comments`,
            {
                method: 'POST',
                body: JSON.stringify({ body }),
                headers: { 'Authorization': `token ${process.env.GITHUB_OAUTH2TOKEN}` }
            }
        ).then(res => console.log('Response:', res));
    })
    .catch((code, hostName) => {
        console.error('Failed to execute the tests!', code, hostName);
        process.exit(code);
    });

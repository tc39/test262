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
    TRAVIS_BUILD_WEB_URL,
} = process.env;

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

Promise.all(promises).then((engines) => {
    const summary = engines.map(([engine, results]) =>
        `Results for ${engine}:\n${results}`).join('\n');
    console.log(summary);

    const faileds = summary.match(/^\d* failed$/gm);

    const total = faileds
        .map(failed => Number(/\d+/.exec(failed)[0]))
        .reduce((acc, n) => acc + n);

    let description = '';

    if (faileds.some(n => n !== '0 failed')) {
        // Use pending for yellow, don't break the build
        description = `Found ${total} failures executing the tests`;
    }

    console.log(`Summary for tests execution:

${description}

--------------------------------------------
Visit the [TravisCI build page for more info](${TRAVIS_BUILD_WEB_URL}).

End of summary!`);
}).catch((code, hostName) => {
    console.error('Failed to execute the tests!', code, hostName);
    process.exit(code);
});

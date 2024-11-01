import filenamify from 'filenamify';
import fs from 'node:fs';
import jsesc from 'jsesc';
import rewritePattern from 'regexpu-core';
import slugify from 'slugify';

import header from './header.mjs';

const patterns = {
    'whitespace class escape': '\\s',
    'non-whitespace class escape': '\\S',
    'word class escape': '\\w',
    'non-word class escape': '\\W',
    'digit class escape': '\\d',
    'non-digit class escape': '\\D',
};

function buildContent(desc, pattern, range, max, flags, skip180e) {
    let method;
    let features = [];

    let content = header(`Compare range for ${desc} ${pattern} with flags ${flags}`);

    content += `
const str = buildString({ loneCodePoints: [], ranges: [[0, ${
    jsesc(max, { numbers: 'hexadecimal' })
}]] });

const re = /${pattern}/${flags};
const matchingRange = /${range}/${flags};

const errors = [];

function matching(str) {
    return str.replace(re, '') === str.replace(matchingRange, '');
}

if (!matching(str)) {
    // Error, let's find out where
    for (const char of str) {
        if (!matching(char)) {
            errors.push('0x' + char.codePointAt(0).toString(16));
        }
    }
}

assert.sameValue(
    errors.length,
    0,
    'Expected matching code points, but received: ' + errors.join(',')
);
`;

    return content;
}

function writeFile(desc, content, suffix = '') {
    const outPath = '../../test/built-ins/RegExp/CharacterClassEscapes';
    const filename = `${outPath}/character-class-${slugify(filenamify(desc.toLowerCase()))}${suffix}.js`;
    fs.writeFileSync(filename, content);
}

// No additions
for (const [desc, escape] of Object.entries(patterns)) {
    const skip180e = escape.toLowerCase().includes('s');
    [
        {
            quantifier: '',
            flags: '',
        },
        {
            quantifier: '+',
            flags: '',
            posCb(u) { return [u, u+u]},
            suffix: '-plus-quantifier',
        },
        {
            quantifier: '',
            flags: 'u',
            max: 0x10FFFF,
            suffix: '-flags-u',
        },
        {
            quantifier: '+',
            flags: 'u',
            posCb(u) { return [u, u+u]},
            suffix: '-plus-quantifier-flags-u',
            max: 0x10FFFF,
        },
    ].forEach(({quantifier, max = 0xFFFF, flags, suffix, posCb = u => [u], negCb = u => [u]}) => {
        flags += 'g';

        const pattern = `${escape}${quantifier}`;
        const range = rewritePattern(pattern, flags, {
            unicodeFlag: flags.includes('u') ? 'transform' : false,
        });

        console.log(`${pattern} => ${range}, flags: ${flags}`);

        const content = buildContent(desc, pattern, range, max, flags, skip180e);

        writeFile(desc, content, suffix);
    });
}

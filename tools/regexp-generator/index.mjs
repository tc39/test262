import filenamify from 'filenamify';
import fs from 'node:fs';
import regenerate from 'regenerate';
import rewritePattern from 'regexpu-core';
import ESCAPE_SETS from 'regexpu-core/data/character-class-escape-sets.js';
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

// Pretty-printing code adapted from unicode-property-escapes-tests.
// https://github.com/mathiasbynens/unicode-property-escapes-tests/blob/60f2dbec2b2a840ee67aa04dbd3449bb90fd2999/regenerate.js

function toHex(codePoint) {
    return '0x' + ('00000' + codePoint.toString(16).toUpperCase()).slice(-6);
};

function toTestData(reg) {
    const data = reg.data;
    // Iterate over the data per `(start, end)` pair.
    let index = 0;
    const length = data.length;
    const loneCodePoints = [];
    const ranges = [];
    while (index < length) {
        let start = data[index];
        let end = data[index + 1] - 1; // Note: the `- 1` makes `end` inclusive.
        if (start == end) {
            loneCodePoints.push(start);
        } else {
            ranges.push([start, end]);
        }
        index += 2;
    }
    return [ loneCodePoints, ranges ];
}

function prettyPrint([ loneCodePoints, ranges ]) {
    const indent = '    ';
    loneCodePoints = loneCodePoints.map((codePoint) => toHex(codePoint));
    ranges = ranges.map(
        (range) => `[${ toHex(range[0]) }, ${ toHex(range[1]) }]`
    );
    const loneCodePointsOutput = loneCodePoints.length ?
        loneCodePoints.length === 1 ? `[${loneCodePoints[0]}]` :
            `[\n${indent}${indent}${ loneCodePoints.join(`,\n${indent}${indent}`) },\n${indent}]` :
        `[]`;
    const rangesOutput = ranges.length ?
        `[\n${indent}${indent}${ ranges.join(`,\n${indent}${indent}`) },\n${indent}]` :
        `[]`;
    return `{\n${indent}loneCodePoints: ${ loneCodePointsOutput },\n${indent}ranges: ${ rangesOutput },\n}`;
}

const LOW_SURROGATES = regenerate().addRange(0xDC00, 0xDFFF);

function buildString(escapeChar, flags) {
    const isUnicode = flags.includes('u');
    let escapeData = ESCAPE_SETS[isUnicode ? 'UNICODE' : 'REGULAR'].get(escapeChar);

    const lowSurrogates = escapeData.clone().intersection(LOW_SURROGATES);
    if (lowSurrogates.data.length === 0) {
        return prettyPrint(toTestData(escapeData));
    }
    const rest = escapeData.clone().remove(LOW_SURROGATES);
    const [ lowLoneCodePoints, lowRanges ] = toTestData(lowSurrogates);
    const [ loneCodePoints, ranges ] = toTestData(rest);
    loneCodePoints.unshift(...lowLoneCodePoints);
    ranges.unshift(...lowRanges);
    return prettyPrint([ loneCodePoints, ranges ]);
}

function buildContent(desc, pattern, range, max, flags, skip180e) {
    let string = buildString(pattern[1], flags);
    let method;
    let features = [];

    let content = header(`Compare range for ${desc} ${pattern} with flags ${flags}`);

    content += `
const str = buildString(${string});

const re = /${pattern}/${flags};

const errors = [];

if (!re.test(str)) {
    // Error, let's find out where
    for (const char of str) {
        if (!re.test(char)) {
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

import filenamify from 'filenamify';
import fs from 'node:fs';
import regenerate from 'regenerate';
import rewritePattern from 'regexpu-core';
import ESCAPE_SETS from 'regexpu-core/data/character-class-escape-sets.js';
import slugify from 'slugify';

import header from './header.mjs';

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
  const indent = '  '; // Test 262 uses two-space indents.
  loneCodePoints = loneCodePoints.map((codePoint) => toHex(codePoint));
  ranges = ranges.map(
    (range) => `[${ toHex(range[0]) }, ${ toHex(range[1]) }]`
  );
  const loneCodePointsOutput = loneCodePoints.length ?
    `[\n${indent}${indent}${ loneCodePoints.join(`,\n${indent}${indent}`) }\n${indent}]` :
    `[]`;
  const rangesOutput = ranges.length ?
    `[\n${indent}${indent}${ ranges.join(`,\n${indent}${indent}`) }\n${indent}]` :
    `[]`;
  return `{\n${indent}loneCodePoints: ${ loneCodePointsOutput },\n${indent}ranges: ${ rangesOutput }\n}`;
}

const LOW_SURROGATES = regenerate().addRange(0xDC00, 0xDFFF);

function toTestCode(escapeData) {
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

// The different character class escapes.
const patterns = {
  's': 'whitespace class escape',
  'S': 'non-whitespace class escape',
  'w': 'word class escape',
  'W': 'non-word class escape',
  'd': 'digit class escape',
  'D': 'non-digit class escape',
};

const negation = {
  's': 'S',
  'S': 's',
  'w': 'W',
  'W': 'w',
  'd': 'D',
  'D': 'd',
}

// In each test file, test all these flag configurations.
const flags_configs = {
  'standard': '',
  'unicode': 'u',
  'vflag': 'v',
}

// For each character class escape, test positive and negative cases.
const test_cases = [
  { positivity: true,
    suffix: '-positive-cases' },
  { positivity: false,
    suffix: '-negative-cases' },
]

function buildRegex(pattern, positivity) {
  return positivity ? `^\\${pattern}+$` : `\\${pattern}`;
}

function buildRegexes(pattern, positivity) {
  const regex = buildRegex(pattern, positivity);
  let regStr = '';
  for (const [regexname, flags] of Object.entries(flags_configs)) {
    regStr += `const ${regexname} = /${regex}/${flags};\n`;
  }
  const allRegexes = Object.keys(flags_configs).toString();
  regStr += `const regexes = [${allRegexes}];`;
  return regStr;
}

function buildString(pattern, positivity) {
  const escape = positivity ? pattern : negation[pattern];
  const escapeData = ESCAPE_SETS.UNICODE.get(escape);
  return toTestCode(escapeData);
}

function buildDescr(pattern, positivity) {
  let name = patterns[pattern];
  let descr = positivity ? 'Check positive cases of' : 'Check negative cases of';
  return `${descr} ${name} \\${pattern}.`;
}

function buildContent(pattern, positivity) {

  let regexes = buildRegexes(pattern, positivity);
  let string = buildString(pattern, positivity);
  let descr = buildDescr(pattern, positivity);
  let testNegate = positivity ? '!' : '';
  let errMsg = positivity ? 'Expected full match, but did not match: ' :
  'Expected no match, but matched: ';

  let content = header(`${descr}`);

  content += `
const str = buildString(
${string}
);

${regexes}

const errors = [];

for (const regex of regexes) {
  if (${testNegate}regex.test(str)) {
    // Error, let's find out where
    for (const char of str) {
      if (${testNegate}regex.test(char)) {
        errors.push('0x' + char.codePointAt(0).toString(16));
      }
    }
  }
}

assert.sameValue(
  errors.length,
  0,
  '${errMsg}' + errors.join(',')
);
`;

    return content;
}

function writeFile(desc, content, suffix = '') {
  const outPath = '../../test/built-ins/RegExp/CharacterClassEscapes';
  const filename = `${outPath}/character-class-${slugify(filenamify(desc.toLowerCase()))}${suffix}.js`;
  fs.writeFileSync(filename, content);
}

for (const [pattern, desc] of Object.entries(patterns)) {
  test_cases.forEach(({positivity, suffix}) => {
    const content = buildContent(pattern, positivity);
    writeFile(desc, content, suffix);
  });
}

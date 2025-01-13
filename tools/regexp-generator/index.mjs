import filenamify from 'filenamify';
import fs from 'node:fs';
import regenerate from './regenerate.mjs';
import rewritePattern from 'regexpu-core';
import ESCAPE_SETS from 'regexpu-core/data/character-class-escape-sets.js';
import slugify from 'slugify';

import header from './header.mjs';

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
  let regex = buildRegex(pattern, positivity);
  let reg_str = '';
  for (const [regexname, flags] of Object.entries(flags_configs)) {
reg_str += `const ${regexname} = /${regex}/${flags};\n`;
  }
  let all_regexes = Object.keys(flags_configs).toString();
  reg_str += `const regexes = [${all_regexes}];`;
  return reg_str;
}

function buildString(pattern, positivity) {
  let escape = positivity ? pattern : negation[pattern];
  let escape_data = ESCAPE_SETS.UNICODE.get(escape);
  return escape_data.toTestCode();
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
  let test_negate = positivity ? '!' : '';
  let err_msg = positivity ? 'Expected full match, but did not match: ' :
  'Expected no match, but matched: ';
  
  let content = header(`${descr}`);

  content += `
const str = buildString(
${string}
);

${regexes}

const errors = [];

for (const regex of regexes) {
  if (${test_negate}regex.test(str)) {
    // Error, let's find out where
    for (const char of str) {
      if (${test_negate}regex.test(char)) {
        errors.push('0x' + char.codePointAt(0).toString(16));
      }
    }
  }
}

assert.sameValue(
  errors.length,
  0,
  '${err_msg}' + errors.join(',')
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

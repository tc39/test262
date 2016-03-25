# Parser Tests

This directory contains tests designed for parsers. There are three directories of tests:

- `pass/`, which contains syntactically valid ECMAScript programs,
- `early/`, which contains programs which match the grammar of ECMAScript but which trigger early errors, and
- `fail/`, which contains files which do not match the grammar of ECMAScript.

A fourth directory, `pass-explicit/`, contains alternative versions of the programs in `pass/`, for reasons discussed below.

Note that these tests are not intended to be evaluated, only parsed. Most would throw an error if run. Because they are testing syntax without depending on a functioning `eval()`, they include no metadata; each file is a utf8-encoded sequence of bytes which is to be parsed in full. The file `LICENSES.md` gives the origin and license of each file.


## Equivalence tests

Every file in `pass/` has a corresponding file in `pass-explicit/` of the same name. The explicit version (in `pass-explicit/`) is intended to appear as a human might write it, with parentheses included where there could conceivably be unclear precedence.

The two versions of each file should be parsed to structures which are equivalent excepting unnecessary whitespace, comments, grouping parentheses, and semicolons.


## Contributing

New `pass/` and `early/` tests should be normalized using the NPM module [normalize-parser-test](https://www.npmjs.com/package/normalize-parser-test). `pass/` tests should additionally have an explicit version created using the provided `node.js` program `make-explicit.js`, which requires node v5 or later.

Add copyright information for new tests to `licenses.md`.

## Sample consumer

Below is a `node.js` program which checks that a particular choice of parser has the correct behavior for all of the tests in this directory. Note that a parser which does not distinguish between early errors and other invalid syntax should treat the tests in `early/` just as they would the tests in `fail/`.

```js
const fs = require('fs');
const shift = require('shift-parser');
const assert = require('assert');

function parse(src, {isModule, earlyErrors}) {
  (isModule ? shift.parseModule : shift.parseScript)(src, {earlyErrors});
}

let passExcludes = [];
let failExcludes = [];
let earlyExcludes = ['557.script.js', '558.script.js', '559.script.js', '560.script.js', '561.script.js', '563.script.js', '564.script.js', '565.script.js', '566.script.js', '567.script.js', '568.script.js', '569.script.js', '570.script.js', '571.script.js', '572.script.js', '574.script.js', '575.script.js', '576.script.js', '577.script.js', '578.script.js', '579.script.js', '580.script.js', '581.script.js', '582.script.js', '583.script.js', '585.script.js', '586.script.js', '587.script.js', '588.script.js', '589.script.js', '590.script.js', '591.script.js', '592.script.js', '593.script.js', '594.script.js', '596.script.js', '597.script.js', '598.script.js', '599.script.js', '600.script.js', '601.script.js', '602.script.js'];

fs.readdirSync('parser-test/pass').filter(f => !passExcludes.includes(f)).forEach(f => {
  let firstTree, secondTree;
  assert.doesNotThrow(() => {
    firstTree = parse(
      fs.readFileSync(`parser-test/pass/${f}`, 'utf8'),
      {isModule: f.match('.module.js'), earlyErrors: true}
    );
  });
  assert.doesNotThrow(() => {
    secondTree = parse(
      fs.readFileSync(`parser-test/pass-explicit/${f}`, 'utf8'),
      {isModule: f.match('.module.js'), earlyErrors: true}
    );
  });
  assert.deepStrictEqual(firstTree, secondTree);
});

fs.readdirSync('parser-test/fail').filter(f => !failExcludes.includes(f)).forEach(f => {
  assert.throws(() => {
    parse(
      fs.readFileSync(`parser-test/fail/${f}`, 'utf8'),
      {isModule: f.match('.module.js'), earlyErrors: false}
    );
  });
});

fs.readdirSync('parser-test/early').filter(f => !earlyExcludes.includes(f)).forEach(f => {
  assert.doesNotThrow(() => {
    parse(
      fs.readFileSync(`parser-test/early/${f}`, 'utf8'),
      {isModule: f.match('.module.js'), earlyErrors: false}
    );
  });
  assert.throws(() => {
    parse(
      fs.readFileSync(`parser-test/early/${f}`, 'utf8'),
      {isModule: f.match('.module.js'), earlyErrors: true}
    );
  });
});
```
# Testing plan guide


Understand the proposal text:

- read the explainer in the proposal repo's README, and
- read the slides from any TC39 plenary presentation.

If you're unfamiliar with ECMAScript spec text, read this guide on [how to read the ECMAScript Specification](https://timothygu.me/es-howto/).

Read the proposal's rendered specification.

## For new APIs

### Boilerplate tests

For new APIs, include standard tests:

- Property descriptor of the object/method/whatever. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/prop-desc.js)
- Brand check for methods, what happens when calling it with a `this` that is not what what it expects, via `Function.prototype.apply` or `.call`. [Example](https://github.com/tc39/test262/blob/main/test/intl402/ListFormat/prototype/format/branding.js)
- Object prototype and extensibility. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/Temporal/Instant/builtin.js)
- Function boilerplate:
  + Function length. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/length.js)
  + Function name. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/String/prototype/at/name.js)
  + Function is or is not a constructor. [Example](https://github.com/tc39/test262/blob/main/test/built-ins/Number/isNaN/not-a-constructor.js)

### Success cases

List the various success cases that result in a normal completion:

- Identify algorithm branches, and include a potential input that leads to each branch case.
- See the proposal's explainer for particular cases that this proposal wants to cover.

### Failure cases

List failure cases, when an exception is thrown:

- Check new spec text for every place where a `?` appears, indicating that what follows may throw an exception.
- List other potential unexpected edge cases. At the rendered spec, use the `U` key to see who calls the related parts of the code, and check for unexpected entry points.

### Side-effects and algorithm step order

Finally, consider testing the order of the algorithm steps, if there are steps that introduce side effects. However, it's best to not overdo it here, the goal is not to have 100% coverage, but to help implementations correctly implement the new functionality.

## For new syntax

A testing plan for new syntax is similar to that for a new API but additionally:

- Test both the syntax and how it's evaluated, so double the tests.
- Check [CONTRIBUTING.md](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md) for special frontmatter flags when testing syntax errors.
- Look into the ECMA-262 sections named [Runtime Semantics: Evaluation](https://tc39.es/ecma262/#sec-array-initializer-runtime-semantics-evaluation).

## Tips and tricks

Check what engines test, in case you missed something. Some engine's test locations in their codebase:

- v8 `v8/test/mjsunit/`
- SpiderMonkey: `js/src/tests/non262/`
- JSC `JSTests/`

Finally, if you don't understand why a certain part of the spec is the way it is, it helps to git blame the file `spec.html` of the proposal git repository. You may find linked PRs pointing to related issues, potentially with test cases that cover that part of the spec.

### Examples of input categories

- `undefined`, `null`, symbols
- strings, "", "\b", "\n"
- Booleans
- number, BigInt, NaN, ±0, ±∞
- Objects, Arrays

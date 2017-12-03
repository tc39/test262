# Test262 Authoring Guidelines

## Source Material

- https://tc39.github.io/ecma262/
- https://github.com/tc39/ecma262/pulls?q=is%3Apr+is%3Aopen+label%3A%22needs+tests%22
  + This is a list of the "needs tests" PRs for changes to the specification.

## Test Case Names

Test cases should be created in files that are named to identify the feature or API that's being tested.

There is no strict naming convention. The file names should be human readable, helpful and, ideally, consistent within a single directory. For examples:

- `Math.fround` handling of `Infinity`: `test/built-ins/Math/fround/Math.fround_Infinity.js`
- `Array.prototype.find` use with `Proxy`: `test/built-ins/Array/prototype/find/Array.prototype.find_callable-Proxy-1.js`
- `arguments` implements an `iterator` interface: `test/language/arguments-object/iterator-interface.js`

See the following directory trees for further recommended examples:

- [test/built-ins/Math/fround](./test/built-ins/Math/fround/)
- [test/built-ins/WeakMap](./test/built-ins/WeakMap/)
- [test/language/arguments-object](./test/language/arguments-object/)

**Note** The project is currently transitioning from a naming system based on specification section numbers. There remains a substantial number of tests that conform to this outdated convention; contributors should ignore that approach when introducing new tests and instead encode this information using [the `esid` frontmatter tag](#esid).

## Test Case Style

A test file has three sections: Copyright, Frontmatter, and Body.  A test looks roughly like this:

```javascript
// Copyright (C) 2015 [Contributor Name]. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: brief description
 info: >
   verbose test description, multiple lines OK.
   (info typically contains relevant, direct quote from ECMAScript)
---*/

[Test Code]
```

### Copyright

The copyright block must be the first section of the test.  The copyright block must use `//` style comments.

### Frontmatter

The Test262 frontmatter is a string of [YAML](https://en.wikipedia.org/wiki/YAML) enclosed by the comment start tag `/*---` and end tag `---*/`.  There must be exactly one Frontmatter per test.

Test262 supports the following tags:

 - [**description**](#description) (required)
 - [**info**](#info)
 - [**negative**](#negative)
 - [**esid**](#esid) (required for new tests)
 - [**includes**](#includes)
 - [**timeout**](#timeout)
 - [**author**](#author)
 - [**flags**](#flags)
 - [**features**](#features) (required for new tests written for new features)

The following tags are deprecated, but exist in old tests:

 - [**es5id**](#es5id) (deprecated)
 - [**es6id**](#es6id) (deprecated)

#### description
**description**: [string]

This is one of two required frontmatter tags. The description should be a short, one-line description of the purpose of this testcase. We suggested that the description be kept to less than 100 characters, but clarity is preferred over brevity.

Eg: Insert &lt;LS&gt; between chunks of one string

#### info
**info**: [multiline string]

This allows a long, free-form comment. The comment is almost always a direct
quote from ECMAScript. It is used to indicate the observable being tested
within the file.

For example:

/*---
esid: sec-weakset.prototype.has
description: Throws TypeError if `this` is not Object.
info: >
  WeakSet.prototype.has ( value )

  1. Let S be the this value.
  2. If Type(S) is not Object, throw a TypeError exception.
---*/

Note: Adding more context than the direct quote from ECMAScript should rarely
be necessary. If you must add context to the quote, use the JavaScript
single line comment syntax.

#### negative
**negative**: [dictionary containing **phase** and **type**]

This means the test is expected to throw an error of the given type.  If no error is thrown, a test failure is reported.

- **type**- If an error is thrown, it is implicitly converted to a string. In order for the test to pass, this value must match the name of the error constructor.
- **phase** - Negative tests whose **phase** value is "parse" must produce the specified error prior to executing code. The value "resolution" indicates that the error is expected to result while performing ES2015 module resolution. The value "runtime" dictates that the error is expected to be produced as a result of executing the test code.

For best practices on how to use the negative tag please see [Handling Errors and Negative Test Cases](#handling-errors-and-negative-test-cases), below.

For example:

    negative:
      phase: parse
      type: ReferenceError

#### esid
**esid**: [spec-id]

This tag is required for all new feature tests. This tag identifies the hash ID from the portion of the ECMAScript draft which is most recent to the date the test was added. It represents the anchors on the generated HTML version of the specs. E.g.: `esid: sec-typedarray-length`. This tag might be used to replace a `es6id` or further.

When writing a new test for a Stage 3+ spec not yet published on the draft, the `pending` value can be used while a hash ID is not available.

#### includes
**includes**: [file-list]

This tag names a list of helper files that will be included in the test environment prior to running the test.  Filenames **must** include the `.js` extension.

The helper files are found in the `harness/` directory. When some code is used repeatedly across a group of tests, a new helper function (or group of helpers) can be defined. Helpers increase test complexity, so they should be created and used sparingly.

#### timeout
**timeout**: [integer]

This tag specifies the number of milliseconds to wait before the test runner declares an [asynchronous test](#writing-asynchronous-tests) to have timed out.  It has no effect on synchronous tests.

Test authors **should not** use this tag except as a last resort.  Each runner is allowed to provide its own default timeout, and the user may be permitted to override this in order to account for unusually fast or slow hardware, network delays, etc.

#### author
**author**: [string]

This tag is used to identify the author of a test case.

#### flags
**flags**: [list]

This tag is for boolean properties associated with the test.

- **`onlyStrict`** - only run the test in strict mode
- **`noStrict`** - only run the test in "sloppy" mode
- **`module`** - interpret the source text as [module
  code](https://tc39.github.io/ecma262/#sec-modules)
- **`raw`** - execute the test without any modification (no helpers will be
  available); necessary to test the behavior of directive prologue; implies
  `noStrict`
- **`async`** - defer interpretation of test results until after the invocation
  of the global `$DONE` function
- **`generated`** - informative flag used to denote test files that were
  created procedurally using the project's test generation tool; refer to the
  section titled "Procedurally-generated tests" for more information on this
  process

#### features
**features**: [list]

Some tests require the use of language features that are not directly described by the test file's location in the directory structure. These features should be specified with this tag. See the `features.txt` file for a complete list of available values. This tag is required for new tests written for new features, but contributions will not be "blocked" if the tag is missing from frontmatter. The committing maintainer is required to ensure that the tag is present and contains the correct feature names; this can be done in an follow up commit. 

#### es5id
**es5id**: [es5-test-id]

**Deprecated.**

This tag identifies the section number from the portion of the ECMAScript 5.1 or ECMAScript 3 standard that is tested by this test. It was automatically generated for tests that were originally written for the ES5 (or earlier) version of the test suite and are now part of the ES6 version. You can use the es5id to discover the relevant portion of the ECMAScript standard by looking up the section number in [previous publications of the specification](https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm). Unfortunately, there is no way to identify which version of ECMAScript (specifically, 3 or 5.1) without looking up the section number and deciding whether it covers the observable in the test.

Read the (Test262 Technical Rationale Report)[https://github.com/tc39/test262/wiki/Test262-Technical-Rationale-Report,-October-2017#specification-reference-ids] for reasoning behind deprecation.

#### es6id
**es6id**: [es6-test-id]

**Deprecated.**

This tag identifies the section number from the portion of the ES6 standard that is tested by this test _at the time the test was written_. The es6ids might not correspond to the correction section numbers in the ES6 (or later) specification because routine edits to the specification will change section numbering. For this reason, only the esid is required for new tests.

Read the (Test262 Technical Rationale Report)[https://github.com/tc39/test262/wiki/Test262-Technical-Rationale-Report,-October-2017#specification-reference-ids] for reasoning behind deprecation.

## Test Environment

Each test case is run in a fresh JavaScript environment; in a browser, this will be a new `IFRAME`; for a console runner, this will be a new process.  The test harness code is loaded before the test is run.  The test harness defines the following helper functions:

Function | Purpose
---------|--------
Test262Error(message) | constructor for an error object that indicates a test failure
$DONE(arg) | see Writing Asynchronous Tests, below
assert(value, message) | throw a new Test262Error instance if the specified value is not strictly equal to the JavaScript `true` value; accepts an optional string message for use in creating the error
assert.sameValue(actual, expected, message) | throw a new Test262Error instance if the first two arguments are not [the same value](https://tc39.github.io/ecma262/#sec-samevalue); accepts an optional string message for use in creating the error
assert.notSameValue(actual, unexpected, message) | throw a new Test262Error instance if the first two arguments are [the same value](https://tc39.github.io/ecma262/#sec-samevalue); accepts an optional string message for use in creating the error
assert.throws(expectedErrorConstructor, fn, message) | throw a new Test262Error instance if the provided function does not throw an error, or if the constructor of the value thrown does not match the provided constructor
assert.throws.early(expectedErrorConstructor, code) | throw a new Test262Error instance if the provided code does not throw an early error, or if the constructor of the value thrown does not match the provided constructor. This assertion catches only errors that will be parsed through `Function(code)`.
$ERROR(message) | construct a Test262Error object and throw it <br>**DEPRECATED** -- Do not use in new tests. Use `assert`, `assert.*`, or `throw new Test252Error` instead.

```
/// error class
function Test262Error(message) {
//[omitted body]
}
```

## Handling Errors and Negative Test Cases

Expectations for **parsing errors** should be declared using [the `negative` frontmatter flag](#negative). They must also include the exact `throw` statement specified in this example (in order to guarantee that implementations do not execute the code):

```javascript
/*---
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var var = var;
```

Expectations for **runtime errors** should be defined using the `assert.throws` method and the appropriate JavaScript Error constructor function:

```javascript
assert.throws(TypeError, function() {
  null(); // expect this statement to throw a TypeError
});
```

## Writing Asynchronous Tests

An asynchronous test is any test that include the `async` frontmatter flag. When executing such tests, the runner expects that the global `$DONE()` function will be called to signal test completion.

 * If the argument to `$DONE` is omitted, is `undefined`, or is any other falsy value, the test is considered to have passed.

 * If the argument to `$DONE` is a truthy value, the test is considered to have failed and the argument is displayed as the failure reason.

A common idiom when writing asynchronous tests is the following:

```js
var p = new Promise(function () { /* some test code */ });

p.then(function checkAssertions(arg) {
  if (!expected_condition) {
    throw new Test262Error("failure message");
  }

}).then($DONE, $DONE);
```

Function `checkAssertions` implicitly returns `undefined` if the expected condition is observed.  The return value of function `checkAssertions` is then used to asynchronously invoke the first function of the final `then` call, resulting in a call to `$DONE(undefined)`, which signals a passing test.

If the expected condition is not observed, function `checkAssertions` throws a `Test262Error`.  This is caught by the Promise and then used to asynchronously invoke the second function in the call -- which is also `$DONE` -- resulting in a call to `$DONE(error_object)`, which signals a failing test.

### Checking Exception Type and Message in Asynchronous Tests

This idiom can be extended to check for specific exception types or messages:

```js
p.then(function () {
  // some code that is expected to throw a TypeError

  return "Expected exception to be thrown";
}).then($DONE, function (e) {
 if (!(e instanceof TypeError)) {
  throw new Test262Error("Expected TypeError but got " + e);
 }

 if (!/expected message/.test(e.message)) {
  throw new Test262Error("Expected message to contain 'expected message' but found " + e.message);
 }

}).then($DONE, $DONE);

```

As above, exceptions that are thrown from a `then` clause are passed to a later `$DONE` function and reported asynchronously.

## Linting

Some of the expectations documented here are enforced via a "linting" script. This script is used to validate patches automatically at submission time, but it may also be invoked locally. To do so, first install the required Python packages via the following command:

    pip install --requirement tools/lint/requirements.txt

Then invoke the following command:

    python tools/lint/lint.py --whitelist lint.whitelist [paths to tests]

...where `[paths to tests]` is a list of one or more paths to test files or directories containing test files.

In some cases, it may be necessary for a test to intentionally violate the rules enforced by the linting tool. Such violations can be allowed by including the path of the test(s) in the `lint.whitelist` file. Each path must appear on a dedicated line in that file, and a space-separated list of rules to ignore must follow each path. Lines beginning with the pound sign (`#`) will be ignored. For example:

    # This file documents authorship information and is not itself a test
    test/built-ins/Simd/AUTHORS FRONTMATTER LICENSE

## Procedurally-generated tests

Some language features are expressed through a number of distinct syntactic forms. Test262 maintains these tests as a set of "test cases" and "test templates" in order to ensure equivalent coverage across all forms. The sub-directories within the `src/` directory describe the various language features that benefit from this approach.

Test cases and test templates specify meta-data using the same YAML frontmatter pattern as so-called "static" (i.e. non-generated) tests. The expected attributes differ between test cases and test templates:

### test cases (`*.case`)
Field | Description
------|-------------
`template` | name of the sub-directory to locate templates for this test
`desc` | see the frontmatter definition of the "desc" field. The generated test will have a have final "desc" value which is this text appended with the test template's "name" field in parentheses.
`info` | see the frontmatter definition of the "info" field. The generated test will have a have final "info" value which is this text concatenated at the end of the test templates's "info" text.
`features` | see the frontmatter definition of the "features" field. The generated test will have a final feature list in combination with the template's feature field.

### test templates (`*.template`)
Field | Description
------|-------------
`path` | location within the published test hierarchy to output files created from this template. This path will be ended with the name of the test case file. If path is "/test/language/template1-" and the test case is "cast1.js", the final location of the file will be "/test/language/template1-case1.js"
`name` | human-readable name of the syntactic form described by this template. This text will be appended, in parentheses, to the end of the test cases `desc` field.
`esid` | see the frontmatter definition of the "info" tag.
`info` | see the frontmatter definition of the "info" tag. The generated test will have a have final "info" value which is this text appended with the test cases's "info" text.
`features` | see the frontmatter definition of the "features" field. The generated test will have a final feature list in combination with the test case's feature field.
any other valid frontmatter field | see the frontmatter definitions.

Generated files are managed using the `make.py` Python script located in the root of this repository. To use it, first install the required Python packages via the following command:

    pip install --requirement tools/generation/requirements.txt

And then issue the following command to create files:

    make.py

To remove all generated files:

    make.py clean

The executable located at `tools/generation/generator.py` offers additional control over the generation procedure.

    ./tools/generation/generator.py --help

Tests expressed with this convention are built automatically following the source files' acceptance into the project. Patches should **not** include assets built from these sources.

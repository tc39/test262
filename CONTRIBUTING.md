# Test262 Authoring Guidelines

## Source Material

- https://tc39.github.io/ecma262/
- https://github.com/tc39/ecma262/pulls?q=is%3Apr+is%3Aopen+label%3A%22needs+tests%22
  + This is a list of the "needs tests" PRs for changes to the specification.

## Acceptable Tests

Any test that exercises observable grammar or semantics, originating with citable, normative text in the latest draft of the [ECMAScript Language Specification](https://tc39.es/ecma262/), the [ECMAScript Internationalization API Specification](https://tc39.es/ecma402/), the [The JSON Data
Interchange Syntax](https://ecma-international.org/publications/standards/Ecma-404.htm), a [Stage 3](https://github.com/tc39/proposals#stage-3) proposal or a Pull Request which makes a normative change to any of those specifications.

## Unacceptable Tests

Any test that restricts potentially valid extensions to the ECMAScript Language will not be accepted. Implementations are allowed to extend the language in any way that does not contradict the normative grammar specification, nor violate the specification's [Forbidden Extensions](https://tc39.es/ecma262/#sec-forbidden-extensions) section, which clearly lists the only exceptions to this rule.

## Verifying Tests

Existing implementations will usually fail new tests for a TC39 proposal or pull request because they have not yet made the changes necessary to support it, which can make verifying correctness of the tests difficult.
Authors may find it convenient to evaluate their tests using engine262, which is designed to be easily modified and [run against test262](https://github.com/engine262/engine262#testing-engine262).

## Test Case Names

Test cases should be created in files that are named to identify the feature or API that's being tested.

The names should use alphanumeric characters and `.`, `-`, `_`. Otherwise, there is no strict naming convention, but the file names should be human readable, helpful and, ideally, consistent within a single directory. For examples:

- `Math.fround` handling of `Infinity`: `test/built-ins/Math/fround/Math.fround_Infinity.js`
- `Array.prototype.find` use with `Proxy`: `test/built-ins/Array/prototype/find/Array.prototype.find_callable-Proxy-1.js`
- `arguments` implements an `iterator` interface: `test/language/arguments-object/iterator-interface.js`

See the following directory trees for further recommended examples:

- [test/built-ins/Math/fround](./test/built-ins/Math/fround/)
- [test/built-ins/WeakMap](./test/built-ins/WeakMap/)
- [test/language/arguments-object](./test/language/arguments-object/)

**Note** The project is currently transitioning from a naming system based on specification section numbers. There remains a substantial number of tests that conform to this outdated convention; contributors should ignore that approach when introducing new tests and instead encode this information using [the `esid` frontmatter key](#esid).

## Test Case Style

A test file has three sections: Copyright, Frontmatter, and Body.  A test looks roughly like this:

```javascript
// Copyright (C) $Year $ContributorName. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: reference to spec section, e.g. "sec-well-known-symbols"
description: >
    brief description, e.g. "Non-numeric input must be rejected with a TypeError"
info: |
    verbose test description, multiple lines OK.
    (info should contain relevant, direct quotes from ECMAScript if possible)
    For example:

    String.fromCodePoint ( ..._codePoints_ )

    5. Repeat, while _nextIndex_ &lt; _length_
      a. Let _next_ be _codePoints_[_nextIndex_].
      b. Let _nextCP_ be ? ToNumber(_next_).
      d. If _nextCP_ &lt; 0 or _nextCP_ &gt; 0x10FFFF, throw a *RangeError* exception.
features: [example]
---*/

var maxCodePoint = 0x10FFFF;
var maxCodePointString = '\u{10FFFF}';

assert.sameValue(String.fromCodePoint(maxCodePoint), maxCodePointString,
    'String.fromCodePoint can produce a string including the highest code point');

assert.throws(
  RangeError,
  function() {
    String.fromCodePoint(maxCodePoint + 1);
  },
  'String.fromCodePoint throws a RangeError when an argument is greater than the highest code point value'
);
```

### Copyright

The copyright block should be the first section of the test. The copyright block must use `//` style comments.

The copyright should follow this format:

```js
// Copyright (C) $Year $ContributorName. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
```

Where

- `$Year` must be a 4 digit single year. It should not be a year range. If it's extremely necessary to add multiple years, repeat line for each year.
- `$ContributorName` must be a legal (natural or juridical) person's name.

The code must be a BSD or BSD-style compatible with the license of this project. Therefore, the line following the year and name parts should be written as in the example above.

### Frontmatter

The Test262 frontmatter is a string of [YAML](https://en.wikipedia.org/wiki/YAML) enclosed by the comment start tag `/*---` and end tag `---*/`. In order to simplify parsing, scalar values spanning multiple lines may not be expressed using "flow" notation.

There must be exactly one Frontmatter per test.

Test262 supports the following keys:

 - [**description**](#description) (required)
 - [**esid**](#esid) (required for new tests)
 - [**info**](#info)
 - [**negative**](#negative)
 - [**includes**](#includes)
 - [**author**](#author)
 - [**flags**](#flags)
 - [**features**](#features) (required for new tests written for new features)
 - [**locale**](#locale)

The following keys are deprecated, but exist in old tests:

 - [**es5id**](#es5id) (deprecated)
 - [**es6id**](#es6id) (deprecated)

#### description
`description: [string]`

This is one of two required frontmatter keys. The description should be a short, one-line description of the purpose of this testcase. We suggest that the description be kept to less than 100 characters, but clarity is preferred over brevity.

Eg: Insert &lt;LS&gt; between chunks of one string

#### esid
`esid: [spec-id]`

This key is required for all new feature tests. This key identifies the hash ID from the portion of the ECMAScript draft which is most recent to the date the test was added. It represents the anchors on the generated HTML version of the specs. E.g.: `esid: sec-typedarray-length`. This key might be used to replace a `es6id` or further.

When writing a new test for a Stage 3+ spec not yet published on the draft, the `pending` value can be used while a hash ID is not available.

#### info
`info: [multiline string]`

This allows a long, free-form comment. The comment is almost always a direct
quote from ECMAScript. It is used to indicate the observable being tested
within the file.

For example:

```
/*---
esid: sec-weakset.prototype.has
description: Throws TypeError if `this` is not Object.
info: |
    String.fromCodePoint ( ..._codePoints_ )

    5. Repeat, while _nextIndex_ &lt; _length_
      a. Let _next_ be _codePoints_[_nextIndex_].
      b. Let _nextCP_ be ? ToNumber(_next_).
      d. If _nextCP_ &lt; 0 or _nextCP_ &gt; 0x10FFFF, throw a *RangeError* exception.
---*/
```

Note: Adding more context than the direct quote from ECMAScript should rarely
be necessary. If you must add context to the quote, use the JavaScript
single line comment syntax.

#### negative
`negative: [dictionary containing "phase" and "type" keys]`

This means the test is expected to throw an error of the given type.  If no error is thrown, a test failure is reported. The **phase** field must precede the **type** field.

- **phase** - Negative tests whose **phase** value is "parse" must produce the specified error prior to executing code. The value "resolution" indicates that the error is expected to result while performing ES2015 module resolution. The value "runtime" dictates that the error is expected to be produced as a result of executing the test code.
- **type** - If an error is thrown, it is implicitly converted to a string. In order for the test to pass, this value must match the name of the error constructor.

For best practices on how to use the negative key please see [Handling Errors and Negative Test Cases](#handling-errors-and-negative-test-cases), below.

For example:

```
negative:
  phase: parse
  type: SyntaxError
```

#### includes
`includes: [file-list]`

This key names a list of files in the `harness/` directory that will be included in the test environment prior to running the test.  Filenames **must** include the `.js` extension.
Includes should use flow style without line break (separating items by commas and enclosing them in square brackets), block style (one line for each item, each line starting with a dash) isn't allowed.
When some code is used repeatedly across a group of tests, it may be appropriate to define it in a harness file. This practice increases test complexity, so it should be applied sparingly.

For example:

```
includes: [include1.js, include2.js]
```

#### author
`author: [string]`

This key is used to identify the author of a test case.

#### flags
`flags: [list]`

This key is for boolean properties associated with the test.

- **onlyStrict** - only run the test in strict mode
- **noStrict** - only run the test in "sloppy" mode
- **module** - interpret the source text as
  [module code](https://tc39.github.io/ecma262/#sec-modules)
- **raw** - execute the test without any modification (no harness files will be
  included); necessary to test the behavior of directive prologue; implies
  `noStrict`
- **async** - defer interpretation of test results until settlement of an
  `asyncTest` callback promise or manual invocation of `$DONE`; refer to
  [Writing Asynchronous Tests](#writing-asynchronous-tests) for details
- **generated** - informative flag used to denote test files that were
  created procedurally using the project's test generation tool; refer to
  [Procedurally-generated tests](#procedurally-generated-tests)
  for more information on this process
- **CanBlockIsFalse** - only run the test when the [[CanBlock]] property of the [Agent Record](https://tc39.github.io/ecma262/#sec-agents) executing the test file is `false`
- **CanBlockIsTrue** - only run the test when the [[CanBlock]] property of the [Agent Record](https://tc39.github.io/ecma262/#sec-agents) executing the test file is `true`
- **non-deterministic** - informative flag used to communicate that the semantics under test are intentionally under-specified, so the test's passing or failing status is neither reliable nor an indication of conformance

#### features
`features: [list]`

Some tests require the use of language features that are not directly described by the test file's location in the directory structure. These features should be specified with this key. See the [`features.txt`](features.txt) file for a complete list of available values. This key is required for new tests written for new features, but contributions will not be "blocked" if the key is missing from frontmatter. The committing maintainer is required to ensure that the key is present and contains the correct feature names; this can be done in a follow up commit.

#### locale
`locale: [list]`

Some tests require the use of one or more specific human languages as exposed by [ECMA402](https://tc39.es/ecma402/) as a means to verify semantics which cannot be observed in the abstract. Such tests must declare their requirements by using this key to define an array of one or more valid language tags or subtags.

#### es5id
`es5id: [es5-test-id]`

**_DEPRECATED._**

This key identifies the section number from the portion of the ECMAScript 5.1 or ECMAScript 3 standard that is tested by this test. It was automatically generated for tests that were originally written for the ES5 (or earlier) version of the test suite and are now part of the ES6 version. You can use the es5id to discover the relevant portion of the ECMAScript standard by looking up the section number in [previous publications of the specification](https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm). Unfortunately, there is no way to identify which version of ECMAScript (specifically, 3 or 5.1) without looking up the section number and deciding whether it covers the observable in the test.

Read the [Test262 Technical Rationale Report](https://github.com/tc39/test262/wiki/Test262-Technical-Rationale-Report,-October-2017#specification-reference-ids) for reasoning behind deprecation.

#### es6id
`es6id: [es6-test-id]`

**_DEPRECATED._**

This key identifies the section number from the portion of the ES6 standard that is tested by this test _at the time the test was written_. The es6ids might not correspond to the correction section numbers in the ES6 (or later) specification because routine edits to the specification will change section numbering. For this reason, only the esid is required for new tests.

Read the [Test262 Technical Rationale Report](https://github.com/tc39/test262/wiki/Test262-Technical-Rationale-Report,-October-2017#specification-reference-ids) for reasoning behind deprecation.

## Staging

There is a `test/staging/` folder, containing tests that are subject to fewer requirements, in order to get tests running across more than one implementation as early as possible, and promote interoperability of in-progress features.

Tests in staging are not required to be split up into one test per file, or to conform to any particular style as long as they are runnable.
In particular, mechanically-converted tests from implementations' private test suites are encouraged, as sharing them with other implementations promotes interoperability.

These are the requirements for adding a test to staging:

1. Just as with a test outside of staging, it must test an existing language feature, a Stage 3 TC39 proposal, or a normative pull request.
2. It is correct.
3. It is runnable using the usual test262 runner.
4. It is reviewed by someone with permission to land tests in the staging folder, not necessarily a test262 maintainer.
5. If it requires the implementation to support ECMA-402, it must be in `test/staging/intl402/` or a subfolder thereof.

Tests are intended to live temporarily in staging.
Once the feature they test has stabilized, contributors are encouraged to refine them to meet the additional requirements of the main test262 suite, and move them out of the staging folder.

Tests in staging do not count towards the test262 coverage requirement for a TC39 proposal to reach Stage 4.

Implementations may designate a group of people who have permission to review and land tests in the staging folder.
To add or remove people from this group, please open an issue.

## Test Environment

Each test case is run in a fresh JavaScript environment; in a browser, this will be a new &lt;iframe&gt;; for a console runner, this will be a new process.

Before the test is executed (and unless the test uses the `raw` frontmatter flag), the test runner will evaluate a number of files in the `harness/` directory. At a minimum, this procedure will define the following functions:

Function | Purpose
---------|--------
`Test262Error(message)` | constructor for an error object that indicates a test failure
`$DONE(arg)` | see [Writing Asynchronous Tests](#writing-asynchronous-tests), below
`assert(value, message)` | throw a new Test262Error instance if the specified value is not strictly equal to the JavaScript `true` value; accepts an optional string message explaining the scenario and what should have happened
`assert.sameValue(actual, expected, message)` | throw a new Test262Error instance if the first two arguments are not [the same value](https://tc39.github.io/ecma262/#sec-samevalue); accepts an optional string message explaining the scenario and what should have happened
`assert.notSameValue(actual, unexpected, message)` | throw a new Test262Error instance if the first two arguments are [the same value](https://tc39.github.io/ecma262/#sec-samevalue); accepts an optional string message explaining the scenario and what should have happened
`assert.throws(expectedErrorConstructor, fn, message)` | throw a new Test262Error instance if the provided function does not throw an error or if the constructor of the value thrown does not match the provided constructor; accepts an optional string message explaining the scenario and what should have happened
`$DONOTEVALUATE()` | throw an exception if the code gets evaluated. This may only be used in [negative test cases for parsing errors](#handling-errors-and-negative-test-cases).
`throw "Test262: This statement should not be evaluated.";` | throw an exception if the code gets evaluated. Use this if the test file has the `raw` flag and it's a negative test case for parsing error.

```javascript
/// error class
function Test262Error(message) {
  // [omitted body]
}
```

## Rules For Module `_FIXTURE` Files

The [Module section of INTERPRETING.md](https://github.com/tc39/test262/blob/HEAD/INTERPRETING.md#modules) states that `_FIXTURE` files will not have Realm modifications applied. In practice, this means that code in `_FIXTURE` files must abide by the following rules:

- **MUST NOT** refer to, or make use of any [Test262-Defined Bindings](https://github.com/tc39/test262/blob/HEAD/INTERPRETING.md#test262-defined-bindings) in any way.
- **MUST NOT** refer to, or make use of any [Host-Defined Functions](https://github.com/tc39/test262/blob/HEAD/INTERPRETING.md#host-defined-functions) in any way.

## Handling Errors and Negative Test Cases

Expectations for **parsing errors** should be declared using [the `negative` frontmatter flag](#negative). They must also include `$DONOTEVALUATE();` (in order to guarantee that implementations do not execute the code):

```javascript
/*---
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var var = var;
```

If the test case has the `raw` flag, the test runner will not load any harness file including the file which defines `$DONOTEVALUATE`. In this case, include a direct `throw "Test262: This statement should not be evaluated.";` statement:

```javascript
/*---
flags: [raw]
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

Consumers that violate the spec by throwing exceptions for parsing errors at runtime instead of at parse time can still get value out of Test262's negative tests by conditionally overriding `$DONOTEVALUATE` to be a no-op for tests that are known to fail. This way, the consumer can still verify that they throw an exception of the expected type, even if it happens during the wrong phase, which prevents regressions and further deviations from the spec.

## Writing Asynchronous Tests

An asynchronous test is any test that include the `async` frontmatter flag.

Most asynchronous tests should include the `asyncHelpers.js` harness file and call its `asyncTest` function **exactly once**, with a callback returning a promise that indicates test failure via rejection and otherwise fulfills upon test conclusion (such as an async function).

```js
/*---
... (other frontmatter) ...
flags: [async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function() {
  assert.sameValue(true, await someTestCode(1), "someTestCode(1) should return true");
});
```

For more complicated asynchronous testing, such as testing Promise or other core asynchronous functionality, the runner expects that the global `$DONE()` function will be called **exactly once** to signal test completion.

 * If the argument to `$DONE` is omitted, is `undefined`, or is any other falsy value, the test is considered to have passed.

 * If the argument to `$DONE` is a truthy value, the test is considered to have failed and the argument is displayed as the failure reason.

### Checking Exception Type in Asynchronous Tests

The `asyncHelpers.js` harness file defines `assert.throwsAsync`, analogous in form to `assert.throws`. It requires that the passed function _asynchronously_ throws the specified exception type, and will reject functions that synchronously throw the specified exception type (and presumably summon [Zalgo](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/)).

```js
/*---
... (other frontmatter) ...
flags: [async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function() {
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], "not a function"), "Array.fromAsync should reject asynchronously");
});
```

## A Note on Python-based tools

This project's internal tooling is built with Python. Contributors seeking to interact with these tools should begin by installing [Python version 2](https://www.python.org/) and [PIP](https://pypi.org/project/pip/). This guide includes instructions for installing packages using PIP directly, but contributors are welcomed to use utilities such as [virtualenv](https://pypi.org/project/virtualenv/), [pyenv](https://github.com/pyenv/pyenv), or [pipenv](https://pypi.org/project/pipenv/) should they have more advanced package management needs.

## Linting

Some of the expectations documented here are enforced via a "linting" script. This script is used to validate patches automatically at submission time, but it may also be invoked locally. To do so, first install the required Python packages via the following command:

    python -m pip install --requirement tools/lint/requirements.txt

Then invoke the following command:

    python tools/lint/lint.py --exceptions lint.exceptions [paths to tests]

...where `[paths to tests]` is a list of one or more paths to test files or directories containing test files.

In some cases, it may be necessary for a test to intentionally violate the rules enforced by the linting tool. Such violations can be allowed by including the path of the test(s) in the `lint.exceptions` file. Each path must appear on a dedicated line in that file, and a space-separated list of rules to ignore must follow each path. Lines beginning with the pound sign (`#`) will be ignored. For example:

    # This file documents authorship information and is not itself a test
    test/built-ins/Simd/AUTHORS FRONTMATTER LICENSE

## Procedurally-generated tests

Some language features are expressed through a number of distinct syntactic forms. To ensure equivalent coverage across all of them, Test262 includes "test templates" and "test cases" in sub-directories under the `src/` directory. Test cases and test templates have the same sections as so-called "static" (i.e. non-generated) tests, although the expected metadata keys differ between test cases and test templates and the Body of each is subject to special interpretation as described below.

### test templates (`*.template`)
The Body of a test template matches that of a non-generated test in which an arbitrary number of "placeholder" comments have replaced input elements. A placeholder comment is one whose content consists of an identifier wrapped in curly braces with optional interior whitespace, e.g. `/*{name}*/` or `/*{ name }*/`, which is replaced in each generated file with data from a test case.

Expected [Frontmatter](#frontmatter) keys:
Key | Description
------|-------------
`path` | location within the published test hierarchy to output files created from this template, each with a path formed by appending the name of the corresponding test case file. For example, a template with `path` "language/template1-" used by test case file case1.js will generate a test file for that case at "language/template1-case1.js".
`name` | human-readable name of the syntactic form described by this template. Each generated test will have a `description` that is the result of appending the test template `name`, in parentheses, to the test case `desc` field.
`esid` | see the general definition of the [`esid` frontmatter key](#esid).
`info` | see the general definition of the [`info` frontmatter key](#info). Each generated test will have `info` that is the concatenation of the test template `info` field and the test case `info` field.
`features` | see the general definition of the [`features` frontmatter key](#features). Each generated test will have a feature list that is the union of the test template `features` and the test case `features`.
any other valid frontmatter field | see the general definitions.

### test cases (`*.case`)
The Body of a test case consists of a sequence of "value" comments, each followed by a line break and then content for use in a template. A value comment is one whose content consists of a whitespace-separated sequence of an initial ASCII dash, an identifier, and any number of optional tags, e.g. `//- name` or `//- character codepoints`. Line(s) after the value comment are trimmed of leading whitespace and then interpreted according to its tags and used as the replacement for any template placeholder comment sharing its identifier. The special identifiers "setup" and "teardown" always become the start and end (respectively) of the template Body.

Currently-defined value comment tags:
* `codepoints` indicates that the following line(s) of content are to be interpreted as a sequence of hexadecimal-encoded Unicode code points separated by whitespace. This is useful for definining content that includes whitespace or other invisible characters, e.g. `0000` represents a NULL character and `2028 2029` represents a line separator followed by a paragraph separator.

Expected [Frontmatter](#frontmatter) keys:
Key | Description
------|-------------
`template` | a template file, directory or glob expression.
`templates` | a list of template file, directory or glob expressions.
`desc` | see the general definition of the [`description` frontmatter key](#description). Each generated test will have a `description` that is the result of appending the test template `name`, in parentheses, to the test case `desc` field.
`info` | see the general definition of the [`info` frontmatter key](#info). Each generated test will have `info` that is the concatenation of the test template `info` field and the test case `info` field.
`features` | see the general definition of the [`features` frontmatter key](#features). Each generated test will have a feature list that is the union of the test template `features` and the test case `features`.

### Generated test management
Generated files are managed using the `make.py` Python script located in the root of this repository. To use it, first install the required Python packages via the following command:

    python -m pip install --requirement tools/generation/requirements.txt

And then issue the following command to create files:

    ./make.py

To remove all generated files:

    ./make.py clean

The executable located at `tools/generation/generator.py` offers additional control over the generation procedure.

    ./tools/generation/generator.py --help

Tests expressed with this convention are built automatically following the source files' acceptance into the project. Patches should **not** include assets built from these sources.


## Reporting Bugs to Implementers

- [Boa](https://github.com/boa-dev/boa/issues/new)
- [ChakraCore](https://github.com/chakra-core/ChakraCore/issues/new)
- [engine262](https://github.com/engine262/engine262/issues/new)
- [GraalJS](https://github.com/oracle/graal/issues/new?labels=bug&template=5_issues_other.md&title=)
- [Hermes](https://github.com/facebook/hermes/issues/new?labels%5B%5D=need+triage&labels%5B%5D=bug&template=01_bug_report.md&title=)
- [JavaScriptCore](https://bugs.webkit.org/enter_bug.cgi?product=WebKit&component=JavaScriptCore)
- [Kiesel](https://codeberg.org/kiesel-js/kiesel/issues/new)
- [Moddable XS](https://github.com/Moddable-OpenSource/moddable/issues/new?assignees=&labels=&template=bug_report.md&title=)
- [QuickJS](https://github.com/bellard/quickjs/issues/new)
- [SpiderMonkey](https://bugzilla.mozilla.org/enter_bug.cgi?product=Core&component=JavaScript%20Engine)
- [V8](https://bugs.chromium.org/p/v8/issues/entry)

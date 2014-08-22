# Test262 Authoring Guidelines

## Test Case Names

These are guidelines. There is a substantial amount of variation in existing test names.

Test cases are often named by the portion of the spec or draft spec they reference.  A test for ECMAScript 5.1 section [8.7.2 PutValue](http://www.ecma-international.org/ecma-262/5.1/#sec-8.7.2) should be placed in the directory `test262/suite/ch08/8.7/8.7.2/` and have a filename which contains the substring `8.7.2`.  A test for ECMAScript 6.0 draft section [25.4.4.1 Promise.all](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise.all) should be placed in directory `test262/suite/es6/ch25/25.4/25.4.4/25.4.4.1` and have a filename that contains the substring `25.4.4.1`.

One common convention is to break down a section into a number of testable assertions (A) and to test each assertion with one or more test cases (T).  For example, section 25.4.4.1 of ES6 could be broken down like this:

 * A1 Promise.all is a function of one argument
  - A1.1 Promise.all is callable
  - A1.2 Promise.all expects 1 argument
 * A2 Promise.all([]) is a Promise immediately resolved with []
  - A2.1 Promise.all([]) returns a Promise
  - A2.2 Promise.all([]) is resolved immediately
  - A2.3 Promise.all([]) is resolved with a new empty array

with test case `S25.4.4.1_A1.1_T1.js` being the first test for assertion A1.1, and `S25.4.4.1_A2.3_T3.js` being the third test for assertion A2.3.


## Test Case Style

A test file has three sections: Copyright, Frontmatter, and Body.  A test looks roughly like this:

```javascript
// Copyright (C) 2014 [Contributor Name]. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*--- 
 description: brief description
 info: >
   verbose test description, multiple lines OK.
   (this is rarely necessary, usually description is enough)
---*/
 
[Test Code]
```

### Copyright

The copyright block must be the first section of the test.  The copyright block must use `//` style comments.

### Frontmatter

The Test262 frontmatter is a string of YAML enclosed by the comment start tag `/*---` and end tag `---*/`.  There must be exactly one Frontmatter per test.

Test262 supports the following tags: 

 - [**description**](#description)
 - [**info**](#info)
 - [**negative**](#negative)
 - [**es5id**](#es5id)
 - [**includes**](#includes)
 - [**timeout**](#timeout)
 - [**author**](#author)
 - [**flags**](#flags)

#### description
**description**: [string]

This should be a short, one-line description of the purpose of this
testcase.  This is the string displayed by the browser runnner.

Eg: Insert &lt;LS&gt; between chunks of one string

#### info
**info**: [multiline string]

This allows a long, free-form comment.

Eg: Object.prototype.toString - '[object Null]' will be returned when
'this' value is null

#### negative
**negative**: [regex]

This means the test is expected to throw an error of the given type.  If no error is thrown, a test failure is reported.

If an error is thrown, it is implicitly converted to a string.  The second parameter is a regular expression that will be matched against this string.  If the match fails, a test failure is reported.  Thus the regular expression can match either the error name, or the message contents, or both.

For best practices on how to use the negative tag please see Handling Errors and Negative Test Cases, below.

#### es5id
**es5id**: [es5-test-id]

This tag identifies the portion of the ECMAScript 5.1 standard that is tested by this test.  It was automatically generated for tests that were originally written for the ES5 version of the test suite and are now part of the ES6 version.

When writing a new test for ES6, it is only necessary to include this tag when the test covers a part of the ES5 spec that is incorporated into ES6.

#### includes
**includes**: [file-list]

This tag names a list of helper files that will be included in the test environment prior to running the test.  Filenames **must** include the `.js` extension.

The helper files are found in `test/harness/`.  The packaging script will ensure that files from `test/harness` will be copied to `website/harness` when it prepares the `website/` directory for publishing.

You can compactly include one or more like this: `includes: [helperFile.js]` ; `includes: [helper1.js, helper2.js]`, or use the full YAML list syntax

```
includes:
 - helperOne.js
 - helperTwo.js
```

#### timeout
**timeout**: [integer]

This tag specifies the number of milliseconds to wait before the test runner declares an [asynchronous test](#writing-asynchronous-tests) to have timed out.  It has no effect on synchronous tests.

Test authors **should not** use this tag except as a last resort.  Each runner is allowed to provide its own default timeout, and the user may be permitted to override this in order to account for unusually fast or slow hardware, network delays, etc. 

#### author
**author**: [string]

This tag is used to identify the author of a test case. It's optional.

#### flags
**flags**: [list]

This tag is for boolean properties associated with the test.

Flags are not honored in all runners.  For example, the browser runner does 
not supply a `strict` context to tests marked **onlyStrict**.

The included python console runner honors both **onlyStrict**, and **noStrict**.

The experimental [node console runner](https://github.com/bterlson/test262-harness) also honors both flags.

- **`onlyStrict`**
Will only run the test in strict mode

- **`noStrict`**
Will only run the test in "sloppy" mode

### Obsolete Tags

#### path
This tag is obsolete. Do not manually enter this tag.  

#### flags: [negative]
This is an old-style way of documenting a negative test.  New tests should use the **negative: [errortype]** style documented above.

## Test Environment

Each test case is run in a fresh JavaScript environment; in a browser, this will be a new `IFRAME`; for a console runner, this will be a new process.  The test harness code is loaded before the test is run.  The test harness defines the following helper functions:

Function | Purpose
---------|--------
Test262Error(message) | constructor for an error object that indicates a test failure
$ERROR(message) | helper function: construct a Test262Error object and throw it
$DONE(arg) | helper function for asynchronous tests; see Writing Asynchronous Tests, below
NotEarlyError | preconstructed error object used for testing syntax and other early errors; see Syntax Error & Early Error, below

```
/// error class
function Test262Error(message) {
//[omitted body]
}

/// helper function that throws
function $ERROR(message) {
    throw new Test262Error(message);
}

/// helper function for asynchronous tests
function $DONE(arg) {
//[omitted body]
}

var NotEarlyError = new Error(...);
```

## Custom Helpers

When some code is used repeatedly across a group of tests, a new helper function (or group of helpers) can be defined.  To define new helpers, create a file in `test/harness/` with extension `.js`.

To use a custom helper file, name it in the `includes` directive of the Frontmatter, e.g., 

```
/*---
  includes: [helper.js]
---*/
```

**Style Note:** Avoid the use of helpers, if possible.

## Handling Errors and Negative Test Cases

The following patterns are considered the best practice:

### Runtime Error:
```javascript
/*---
 negative: ReferenceError
---*/

1 += 1; // expect this to throw ReferenceError
```
The example uses ReferenceError however it's also possible to use any of the following errors:

- EvalError
- RangeError
- ReferenceError
- TypeError
- URIError

### Syntax Error & Early Error:

To assert that an error is thrown during lexing or parsing, before any lines of JavaScript are executed, use the following pattern:

```javascript
/*
 * @negative ^((?!NotEarlyError).)*$
 */
 
throw NotEarlyError; 
var var = var;
```

There are *very* few cases where a syntax error is **not** an early error. In those cases use the Runtime Error pattern but wrap the test code in an eval statement. Be careful, eval code is not global code!

## Writing Asynchronous Tests

An asynchronous test is any test that includes the string `$DONE` anywhere in the test file.  The test runner checks for the presence of this string; if it is found, the runner expects that the `$DONE()` function will be called to signal test completion.

 * If the argument to `$DONE` is omitted, is `undefined`, or is any other falsy value, the test is considered to have passed.

 * If the argument to `$DONE` is a truthy value, the test is considered to have failed and the argument is displayed as the failure reason.

A common idiom when writing asynchronous tests is the following:

```js
var p = new Promise(function () { /* some test code */ });

p.then(function checkAssertions(arg) {
    if (!expected_condition) {
      $ERROR("failure message");
    }

}).then($DONE, $DONE);
```

Function `checkAssertions` implicitly returns `undefined` if the expected condition is observed.  The return value of function `checkAssertions` is then used to asynchronously invoke the first function of the final `then` call, resulting in a call to `$DONE(undefined)`, which signals a passing test.

If the expected condition is not observed, function `checkAssertions` throws a `Test262Error` via function $ERROR.  This is caught by the Promise and then used to asynchronously invoke the second function in the call -- which is also `$DONE` -- resulting in a call to `$DONE(error_object)`, which signals a failing test. 

### Checking Exception Type and Message in Asynchronous Tests

This idiom can be extended to check for specific exception types or messages:

```js
p.then(function () {
    // some code that is expected to throw a TypeError

    return "Expected exception to be thrown";
}).then($DONE, function (e) {
   if (!e instanceof TypeError) {
      $ERROR("Expected TypeError but got " + e);
   }

   if (!/expected message/.test(e.message)) {
      $ERROR("Expected message to contain 'expected message' but found " + e.message);
   }

}).then($DONE, $DONE);

```

As above, exceptions that are thrown from a `then` clause are passed to a later `$DONE` function and reported asynchronously.  


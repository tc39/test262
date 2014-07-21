## Using the Console Test Runner

The console test runner is used to test browserless implementations of ECMAScript, e.g., [v8](http://en.wikipedia.org/wiki/V8_(JavaScript_engine), [node](http://en.wikipedia.org/wiki/Node.js), or [js24](http://packages.ubuntu.com/trusty/libmozjs-24-bin) 

### Requirements

To use the `test262.py` runner, you must have the following:

 * a checkout of the [test262 project](https://github.com/tc39/test262/)
 * Python 2.7
 * the Python YAML library [PyYAML](http://www.pyyaml.org)
 * the javascript engine you intend to test (node, v8, etc.)

### Quick Start

To confirm the console test runner is working on a UNIX-like system

```
test262$ ./tools/packaging/test262.py --command "node" 7.2_A1.1_T1
ch07/7.2/S7.2_A1.1_T1 passed in non-strict mode

test262$
```

On a Windows system:

```
Z:\test262>tools\packaging\test262.py --command="node" 7.2_A1.1_T1
ch07\7.2\S7.2_A1.1_T1 passed in non-strict mode


Z:\test262>
```

### Options

Name | Action
-----|-------
-h, --help | displays a brief help message
--command=COMMAND | **required** command which invokes javascript engine to be tested
--tests=TESTS | path to the test suite; default is current directory
--cat | don't execute tests, just print code that would be run
--summary | generate a summary at end of execution
--full-summary | generate a longer summary with details of test failures
--strict_only | run only tests that are marked **@onlyStrict**
--non_strict_only | run only tests that are marked **@noStrict**
--unmarked_default=MODE | mode to use for tests that are not marked **@onlyStrict** or **@noStrict** ; MODE can be `strict` or `non_strict` or `both`
--logname=LOGNAME | write output to file (in addition to stdout)
--junitname=JUNITNAME | write test results to file in JUnit XML format
--loglevel=LOGLEVEL | set log level, primarily useful for debugging `test262.py` 
--print-handle=FUNC | enable async test logging via javascript function e.g., `console.log`
 
### Usage Notes

Non-option arguments are used as filters to match test names.  If no filters are found, the whole test suite is run.

Example | Result
-|-
test262.py --command="node" | run all tests
test262.py --command="node" ch07 ch11 | run tests from chapters 7 and 11
test262.py --command="node" 4.4 | run all tests with "4.4" in the name

The COMMAND argument can be a quoted string.  This is useful when testing ECMAScript6 features in node, because node requires the command-line argument `--harmony` to enable ES6:

```
$ test262.py --command="node --harmony" es6
``` 


## Test262 Authoring Guidelines

### Test Case Names

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

### Test Case Style
A test file has the following style format:
```javascript
// Copyright (C) 2014 [Contributor Name]. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/* 
 * Tags...
 */
 
[Test Code]
```

### Tags
Test262 officially supports the following tags: **@description**, **@negative**, **@path** & **@author**

##### @description
This tag is used to describe the purpose of a particular testcase. 
Eg: Insert &lt;LS&gt; between chunks of one string

##### @negative [.] \(not supported by Python console harness)
Negative means the test will throw an error and given the error there will be a string comparison on the error message. It has an optional second parameter (it's a *regex-dot* if not provided) that will be used to compare. For best practices on how to use negative tag please see Handling Errors and Negative Test Cases.

##### @path
This tag is used by the JSON packaging. Do not manually enter this tag.  

##### @author
This tag is used to identify the author of a test case. It's optional.

Some tags which are used only by the Python runner: **@onlyStrict**, **@noStrict**

##### @onlyStrict
Will only run the test in strict mode

##### @noStrict
Will only not run the test in non-strict mode

### Handling Errors and Negative Test Cases
The following patterns are considered the best practice:
#### Runtime Error:
```javascript
var error;

try {
    [test code]
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if(!(e instanceof ReferenceError)) {
    $ERROR('expected to have ReferenceError, got ' + error.name + ' instead.');
}
```
The example uses ReferenceError however it's also possible to use any of the following error here:

- EvalError
- RangeError
- ReferenceError
- TypeError
- URIError

#### Syntax Error & Early Error:
```javascript
/*
 * @negative ^((?!NotEarlyError).)*$
 */
 
throw "NotEarlyError"; 
[test code]
```

There are *very* few cases where a syntax error is **not** an early error. In those cases use the Runtime Error pattern but wrap the test code in an eval statement. Be careful, eval code is not global code!

### Writing Asynchronous Tests

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

Function `checkAssertions` implicitly returns `undefined` if the expected condition is observed.  The return value of function `checkAssertions` is then passed to the first function of the final `then` call, resulting in a call to `$DONE(undefined)`, which signals a passing test.

If the expected condition is not observed, function `checkAssertions` throws a `Test262Error` via function $ERROR.  This is caught by the Promise and passed to the second function in the call -- which is also `$DONE` -- resulting in a call to `$DONE(error_object)`, which signals
a failing test. 

#### Checking Exception Type and Message in Asynchronous Tests

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


### Other Features

#### &#36;INCLUDE(fileName) method

&#36;INCLUDE will load an external Javascript file in the same context before executing a test. In most cases usage of this method should be avoided. It's a good practice only when a large amount of tests need a special check that's not provided by the default harness. If that's the case, please explain the use case in detail.

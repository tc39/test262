# Interpreting Test262 Tests

All tests are declared as text files located within this project's `test`
directory. In order to execute Test262 tests, runtimes must observe the
following semantics.

## Test Execution

Test262 tests are only valid under the runtime environment conditions described
here. Test environments may be further modified according to the metadata
contained with each test--refer to the "Metadata" section for more details.

### Realm Isolation

Each test must be executed in a new [ECMAScript
realm](https://tc39.github.io/ecma262/#sec-code-realms) dedicated to that test.
Unless configured otherwise (via the `module` flag), source text must be
interpreted as [global
code](http://www.ecma-international.org/ecma-262/6.0/#sec-types-of-source-code).

### Test262-Defined Bindings

The contents of the following files must be evaluated in the test realm's
global scope prior to test execution:

1. `harness/assert.js`
2. `harness/sta.js`

### Host-Defined Functions

The following values must be defined as writable, configurable, non-enumerable
properties of the global scope prior to test execution.

- **`print`** A function that exposes the string value of its first argument to
  the test runner. This is used as a communication mechanism for asynchronous
  tests (via the `async` flag, described below).

### Strict Mode

Unless configured otherwise (via the `noStrict`, `onlyStrict`, `module`, or
`raw` flags), each test must be executed twice: once in ECMAScript's non-strict
mode, and again in ECMAScript's strict mode. To run in strict mode, the test
contents must be modified prior to execution--[a "use strict"
directive](https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive)
must be inserted as the initial character sequence of the file, followed by a
semicolon (`;`) and newline character (`\n`):

    "use strict";

This must precede any additional text modifications described by test metadata.

## Test Results

By default, tests signal failure by generating an uncaught exception. If
execution completes without generating an exception, the test must be
interpreted as "passing." Any uncaught exception must be interpreted as test
failure. These semantics may be modified by any test according to the metadata
declared within the test itself (via the `negative` attribute and the `async`
flag, described below).

## Metadata

Each test file may define metadata that describe additional requirements. This
information is delimited by the token sequence `/*---` and `---*/` and is
structured as [YAML](http://yaml.org/).

### `negative`

These tests are expected to generate an uncaught exception. The value of this
attribute is the name of the constructor of the expected error. If a test
configured with the `negative` attribute completes without throwing an
exception, or if the name of the thrown exception's constructor does not match
the specified constructor name, the test must be interpreted as "failing."

*Example:*

```js
/*---
negative: ReferenceError
---*/
unresolvable;
```

### `includes`

One or more files whose content must be evaluated in the test realm's global
scope prior to test execution. These files are located within the `harness/`
directory of the Test262 project.

*Example*

```js
/*---
includes: [testBuildInObject.js]
---*/
testBuiltInObject(Number.prototype.toLocaleString, true, false, [], 0);
```

### `flags`

The `flags` attribute is an optional value that specifies one or more of the
following strings:

- **`onlyStrict`** The test must be executed just once--in strict mode, only.
  This must be accomplished using the transformation described in the section
  titled "Strict Mode".

  *Example*

  ```js
  /*---
  flags: [onlyStrict]
  ---*/
  var thisVal = null;
  [null].forEach(function() {
    thisVal = this;
  });
  assert.sameValue(thisVal, undefined);
  ```

- **`noStrict`** The test must be executed just once--in non-strict mode, only.
  In other words, the transformation described by the section titled "Strict
  Mode" must **not** be applied to these tests.

  *Example*

  ```js
  /*---
  flags: [noStrict]
  ---*/
  var thisVal = null;
  [null].forEach(function() {
    thisVal = this;
  });
  assert.notSameValue(thisVal, undefined);
  assert.sameValue(thisVal, this);
  ```

- **`module`** The test source code must be interpreted as [module
  code](http://www.ecma-international.org/ecma-262/6.0/#sec-types-of-source-code).
  In addition, this flag negates the default requirement to execute the test
  both in strict mode and in non-strict mode. In other words, the
  transformation described by the section titled "Strict Mode" must **not** be
  applied to these tests.

  *Example*

  ```js
  /*---
  flags: [module]
  ---*/
  export default function* g() {}
  ```

- **`raw`** The test source code must not be modified in any way, and the test
  must be executed just once (in non-strict mode, only).

  *Example*

  ```js
  /*---
  flags: [raw]
  ---*/
  'use strict'
  [0]
  's'.p = null;
  ```

- **`async`** The file `harness/donePrintHandle.js` must be evaluated in the
  test realm's global scope prior to test execution. The test must not be
  considered complete until the implementation-defined `print` function has
  been invoked or some length of time has passed without any such invocation.
  In the event of a passing test run, this function will be invoked with the
  string `'Test262:AsyncTestComplete'`. If invoked with any other value, the
  test must be interpreted as failed. The implementation is free to select an
  appropriate length of time to wait before considering the test "timed out"
  and failing.

  *Example*

  ```js
  /*---
  flags: [async]
  ---*/
  Promise.resolve()
    .then(function() {
        print('Test262:AsyncTestComplete');
      }, function(reason) {
        print('Error: ' + reason);
      });
  ```

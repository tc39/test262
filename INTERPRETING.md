
# Interpreting Test262 Tests

All tests are declared as text files located within this project's `test`
directory. In order to execute Test262 tests, runtimes must observe the
following semantics.

**Note** When these instructions change in any substantive way, the `version`
property of the JSON-formatted `package.json` file will be incremented. In this
way, consumers who are transitioning between revisions of Test262 can more
easily determine the cause of new test failures.

## Test Execution

Test262 tests are only valid under the runtime environment conditions described
here. Test environments may be further modified according to the metadata
contained with each test--refer to the [Metadata](#metadata) section for more details.

### Realm Isolation

Each test must be executed in a new [ECMAScript
realm](https://tc39.github.io/ecma262/#sec-code-realms) dedicated to that test.
Unless configured otherwise (via the `module` flag), source text must be
interpreted as [global
code](https://tc39.github.io/ecma262/#sec-types-of-source-code).

### Test262-Defined Bindings

The contents of the following harness files must be evaluated in the test
realm's global scope prior to test execution unless the test uses the `raw`
frontmatter flag:

1. `harness/assert.js`
2. `harness/sta.js`

### Host-Defined Functions

The following values must be defined as writable, configurable, non-enumerable
properties of the global scope prior to test execution.

- **`print`** A function that exposes the string value of its first argument to
  the test runner. This is used as a communication mechanism for asynchronous
  tests (via the `async` flag, described below).
- **`$262`** An ordinary object with the following properties:
  - **`AbstractModuleSource`** - a reference to the `%AbstractModuleSource%` constructor which does not appear as a property of the global object.
  - **`createRealm`** - a function which creates a new [ECMAScript
    Realm](https://tc39.github.io/ecma262/#sec-code-realms),
    defines this API on the new realm's global object, and returns the `$262`
    property of the new realm's global object
  - **`detachArrayBuffer`** - a function which implements [the
    DetachArrayBuffer abstract
    operation](https://tc39.github.io/ecma262/#sec-detacharraybuffer)
  - **`evalScript`** - a function which accepts a string value as its first
    argument and executes it as [an ECMAScript
    script](https://tc39.github.io/ecma262/#sec-scripts) according to the
    following algorithm:

        1. Let hostDefined be any host-defined values for the provided
           sourceText (obtained in an implementation dependent manner)
        2. Let realm be the current Realm Record.
        3. Let s be ParseScript(sourceText, realm, hostDefined).
        4. If s is a List of errors, then
           a. Let error be the first element of s.
           b. Return
              Completion{[[Type]]: throw, [[Value]]: error, [[Target]]: empty}.
        5. Let status be ScriptEvaluation(s).
        6. Return Completion(status).

  - **`gc`** - a function that wraps the host's garbage collection invocation mechanism, if such a capability exists. Must throw an exception if no capability exists. This is necessary for testing the semantics of any feature that relies on garbage collection, e.g. the `WeakRef` API.
  - **`global`** - a reference to the global object on which `$262` was initially defined
  - **`IsHTMLDDA`** - (present only in implementations that can provide it) an
    object that:

    1. has an [[IsHTMLDDA]] internal slot, and
    2. when called with no arguments or with the first argument `""` (an empty string) returns `null`.

          Note: The peculiar second requirement permits testing algorithms when they also call `document.all` with such arguments, so that testing for correct behavior requires knowing how the call behaves. This is rarely necessary.

          Use this property to test that ECMAScript algorithms aren't mis-implemented to treat `document.all` as being `undefined` or of type Undefined (instead of Object).

          **Tests using this function must be tagged with the `IsHTMLDDA` feature so that only hosts supporting this property will run them.**
  - **`agent`** - an ordinary object with the following properties:
    - **`start`** - a function that takes a script source string and runs
      the script in a concurrent agent. Will block until that agent is
      running. The agent has no representation. The agent script will be
      run in an environment that has an object `$262` with a property `agent`
      with the following properties:
      - **`receiveBroadcast`** - a function that takes a function and
        calls the function when it has received a broadcast from the parent,
        passing it the broadcast as two arguments, a SharedArrayBuffer and
        an Int32 or BigInt. This function may return before a broadcast is received
        (eg to return to an event loop to await a message) and no code should
        follow the call to this function.
      - **`report`** - a function that accepts a single "message" argument,
        which is converted to a string\* and placed in a transmit queue whence the parent will retrieve it. Messages should be short. (\* Note that string conversion has been implicit since the introduction of this host API, but is now explicit.)
      - **`sleep`** - a function that takes a millisecond argument and
        sleeps the agent for approximately that duration.
      - **`leaving`** - a function that signals that the agent is done and
        may be terminated (if possible).
      - **`monotonicNow`** - a function that returns a value that conforms to [`DOMHighResTimeStamp`][] and is produced in such a way that its semantics conform to **[Monotonic Clock][]**.
    - **`broadcast`** - a function that takes a SharedArrayBuffer and an
        Int32 or BigInt and broadcasts the two values to all concurrent
        agents. The function blocks until all agents have retrieved the
        message. Note, this assumes that all agents that were started are
        still running.
    - **`getReport`** - a function that reads an incoming string from any agent,
      and returns it if it exists, or returns `null` otherwise.
    - **`sleep`** - a function that takes a millisecond argument and
        sleeps the execution for approximately that duration.
    - **`monotonicNow`** - a function that returns a value that conforms to [`DOMHighResTimeStamp`][] and is produced in such a way that its semantics conform to **[Monotonic Clock][]**.

In addition, consumers may choose to override any of [the functions defined by test harness files](https://github.com/tc39/test262/blob/HEAD/CONTRIBUTING.md#test-environment) as they see fit. See [the documentation on handling errors and negative test cases](https://github.com/tc39/test262/blob/HEAD/CONTRIBUTING.md#handling-errors-and-negative-test-cases) for a useful example of this.


#### Normative references

[`DOMHighResTimeStamp`][], **[Monotonic Clock][]**<br>
Ilya Grigorik, James Simonsen, Jatinder Mann.<br>
[High Resolution Time Level 2](https://www.w3.org/TR/hr-time-2/) March 2018. W3C. URL: [https://www.w3.org/TR/hr-time-2/](https://www.w3.org/TR/hr-time-2/)


[`DOMHighResTimeStamp`]: https://www.w3.org/TR/hr-time-2/#sec-domhighrestimestamp        "**DOMHighResTimeStamp**"
[Monotonic Clock]:  https://www.w3.org/TR/hr-time-2/#sec-monotonic-clock  "**Monotonic Clock**"


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

### Modules

Test262 includes tests for ECMAScript 2015 module code, denoted by the "module"
metadata flag. Files bearing a name which includes the sequence `_FIXTURE` **MUST NOT** be interpreted as standalone tests; they are intended to be referenced by test files. Realm modifications, including [Test262-Defined Bindings](#test262-defined-bindings) and [Host-Defined Functions](#host-defined-functions), are not applied to code executed from `_FIXTURE` files. See the [**Rules For Module `_FIXTURE` Files** section of CONTRIBUTING.md](https://github.com/tc39/test262/blob/HEAD/CONTRIBUTING.md#rules-for-module-fixturejs-files) for more information.

All module specifiers used by Test262 begin with the character sequence `./`.
The remaining characters should be interpreted as the name of a file within the
same directory as the file under test. The contents of this file must be
interpreted as UTF-8-encoded text and supplied to the Source Text Module
Record's ParseModule abstract operation. The result of that operation must be
returned by the implementation-defined HostResolveImportedModule directly.

For example, consider a test file located at
`test/language/import/nested/index.js` with the following contents:

```js
import * as ns from './dep.js';
```

Implementers should attempt to resolve this module specifier by loading a file
located at `test/language/import/nested/dep.js`.

Files bearing a name ending in `.json` are intended to be interpreted as JSON.

Implementers should resolve the specifier `<module source>` to a module that
provides a valid [Module Source](https://tc39.es/proposal-source-phase-imports/#sec-module-source-objects),
such as a [WebAssembly module](https://webassembly.github.io/esm-integration/js-api/index.html#webassembly-module-record).
Tests use `<module source>` specifier are guarded with a feature flag
`source-phase-imports-module-source`.

### Staging

Tests in the `test/staging/` folder are expected to be executed just like all the other tests, in order to promote interoperability as soon as possible.

### Implementations without ECMA-402

Tests in the `test/intl402/` and `test/staging/intl402/` folders assume that the implementation supports [ECMA-402, the ECMAScript Internationalization API Specification](https://tc39.github.io/ecma402/).
When testing an implementation lacking the capabilities in ECMA-402, the tests in those folders should be skipped.

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
attribute is a YAML dictonary with two keys:

- `phase` - the stage of the test interpretation process that the error is
  expected to be produced; valid phases are:
    - `parse`: occurs while parsing the source text, or while checking it for early errors.
    - `resolution`: occurs during module resolution.
    - `runtime`: occurs during evaluation.
- `type` - the name of the constructor of the expected error

If a test configured with the `negative` attribute completes without throwing
an exception, or if the name of the thrown exception's constructor does not
match the specified constructor name, or if the error occurs at a phase that
differs from the indicated phase, the test must be interpreted as "failing."

The **`$DONOTEVALUATE()`** function is for use in tests that include the following meta data:

```
negative:
  phase: runtime
  type: ReferenceError
```

The definition is considered "runner implementation defined" and no guarantees can be made about its behavior, therefore it is restricted to only tests that meet the criteria described above.

*Examples:*

```js
/*---
negative:
  phase: runtime
  type: ReferenceError
---*/
unresolvable;
```

```js
/*---
negative:
  phase: parse
  type: SyntaxError
---*/
$DONOTEVALUATE();
var a\u2E2F;
```


```js
/*---
negative:
  phase: resolution
  type: ReferenceError
flags: [module]
---*/
$DONOTEVALUATE();
export {} from './instn-resolve-empty-export_FIXTURE.js';
// instn-resolve-empty-export_FIXTURE.js contains only:
// 0++;
```



### `includes`

One or more files whose content must be evaluated in the test realm's global
scope prior to test execution, after the files listed in the
[Test262-Defined Bindings](#test262-defined-bindings) section and the file
listed for the `async` flag below.
They must be included in the order given in the source.
These files are located within the `harness/` directory of the Test262 project.

*Example*

```js
/*---
includes: [propertyHelper.js]
---*/
verifyProperty(this, "Object", {
  value: Object,
  writable: true,
  enumerable: false,
  configurable: true,
});
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
  code](https://tc39.github.io/ecma262/#sec-types-of-source-code).
  In addition, this flag negates the default requirement to execute the test
  both in strict mode and in non-strict mode. In other words, the
  transformation described by the section titled "Strict Mode" must **not** be
  applied to these tests. Refer to the section titled "Modules" for more
  information on interpreting these tests.

  *Example*

  ```js
  /*---
  flags: [module]
  ---*/
  export default function* g() {}
  ```

- **`raw`** The test source code must not be modified in any way, files from
  the `harness/` directory must not be evaluated, and the test must be executed
  just once (in non-strict mode, only).

  *Example*

  ```js
  /*---
  flags: [raw]
  ---*/
  'use strict'
  [0]
  's'.p = null;
  ```

- **`async`** The file `harness/doneprintHandle.js` must be evaluated in the
  test realm's global scope prior to test execution, after the files listed in
  the [Test262-Defined Bindings](#test262-defined-bindings) section.
  The test must not be considered complete until the implementation-defined
  `print` function has been invoked or some length of time has passed without
  any such invocation.
  In the event of a passing test run, this function will be invoked with the
  string `'Test262:AsyncTestComplete'`. If invoked with a string that is
  prefixed with the character sequence `Test262:AsyncTestFailure:`, the test
  must be interpreted as failed. The implementation is free to select an
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
        print('Test262:AsyncTestFailure: ' + reason);
      });
  ```

- **`generated`** The test file was created procedurally using the project's
  test generation tool. This flag is specified for informational purposes only
  and has no bearing on how the test should be interpreted.

- **`CanBlockIsFalse`** The test file should only be run when the [[CanBlock]] property of the [Agent Record](https://tc39.github.io/ecma262/#sec-agents) executing the file is `false`.

  *Example*

  ```js
  /*---
  flags: [CanBlockIsFalse]
  ---*/
  var i32 = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));
  assert.throws(TypeError, function() { Atomics.wait(i32, 0, 0, 1000); });
  ```

- **`CanBlockIsTrue`** The test file should only be run when the [[CanBlock]] property of the [Agent Record](https://tc39.github.io/ecma262/#sec-agents) executing the file is `true`.

  *Example*

  ```js
  /*---
  flags: [CanBlockIsTrue]
  ---*/
  var i32 = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));
  Atomics.wait(i32, 0, 0, 1000); // Sleep for one second.
  ```

- **`non-deterministic`** Due to implementation defined parts in the matching
  specs, a test may have more than one path to pass, without failures during
  the execution. While passing state still refers to a compatible implementation,
  it doesn't guarantee all the assertions in the test will execute. In the same
  way, it's not possible to tell the assertions would pass whenever they are
  executed.

### `locale`

The `locale` attribute allows tests to declare explicit information regarding locale specificity. Its value is an array of one or more valid language tags or subtags.

  *Example*

  ```js
  /*---
  locale: [en, en-US, ar]
  ---*/

  var en = new Intl.PluralRules('en');
  assert.sameValue(en.select(1), 'one', 'en.select(1) returns "one"');
  assert.sameValue(en.select(2), 'other', 'en.select(2) returns "other"');

  var enUS = new Intl.PluralRules('en-US');
  assert.sameValue(enUS.select(1), 'one', 'enUS.select(1) returns "one"');
  assert.sameValue(enUS.select(2), 'other', 'enUS.select(2) returns "other"');

  var ar = new Intl.PluralRules('ar');
  assert.sameValue(ar.select(1), 'one', 'ar.select(1) returns "one"');
  assert.sameValue(ar.select(2), 'other', 'ar.select(2) returns "two"');
  ```

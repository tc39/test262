# test262 RFC: Async Helpers

- Feature Name: `async-helpers`
- Start Date: 2022-11-16
- RFC PR: [tc39/test262#3724](https://github.com/tc39/test262/pull/3724)

## Summary

Helpers that improve the contributor's experience writing tests for the behaviour of asynchronous functions.

## Motivation

There are two proposals coming down the line that will add asynchronous built-in functions to JS.
`Array.fromAsync` is one, and it is already at Stage 3.
The other is iterator helpers, which is on the agenda to request Stage 3 for the November/December 2022 plenary meeting. Farther in the future, we may have async do-expressions.
This all suggests that there will be a fair amount of test coverage added in 2023 and beyond that will need to deal with the behaviour of asynchronous functions.

This RFC proposes some new helpers for these tests.
The goal is to provide facilities for test writers to easily test things that happen asynchronously, and to make it easier to reason about the asynchronous control flow in such tests at a glance.

## Guide-level explanation

Concretely, this RFC proposes a new helper file that can be included in a test262 test via `includes: [asyncHelpers.js]`.

This is intended to benefit:
- Test writers, by providing facilities for writing asynchronous tests that are easier to deal with and easier to reason about;
- test262 maintainers, by letting contributors write tests that avoid boilerplate and are easier to review at a glance.

Implementations that consume the test suite should not be affected, since existing test runners should be able to handle the helper file without any changes to the test runner.

As a usage example in this section, as well as in the Prior Art section below, I'll use the `Array.fromAsync()` equivalent of [`test/built-ins/Array/from/mapfn-is-not-callable-typeerror.js`](https://github.com/tc39/test262/blob/main/test/built-ins/Array/from/mapfn-is-not-callable-typeerror.js), which is written approximately as follows (edits made for the purpose of keeping the RFC brief and consistent):
```js
assert.throws(TypeError, () => Array.from([], null), "null mapfn");
assert.throws(TypeError, () => Array.from([], {}), "non-callable object mapfn");
assert.throws(TypeError, () => Array.from([], "String"), "string mapfn");
assert.throws(TypeError, () => Array.from([], true), "boolean mapfn");
assert.throws(TypeError, () => Array.from([], 3.1416), "number mapfn");
```

An example test using the async helpers, testing the equivalent step in the Array.fromAsync proposal, might look like this:
```js
/*---
...
flags: [async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function () {
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], null), "null mapfn");
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], {}), "non-callable object mapfn");
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], "String"), "string mapfn");
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], true), "boolean mapfn");
  await assert.throwsAsync(TypeError, () => Array.fromAsync([], 3.1416), "number mapfn");
});
```

(Alternatively, `Promise.all()` could be used instead of scheduling the calls to `assert.throwsAsync()` in sequence.
The `asyncTest()` helper could also be used without `async`/`await` syntax.)

### Current situation

It is currently not straightforward to write such a test in test262.
There is a [section in `CONTRIBUTING.md`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#checking-exception-type-and-message-in-asynchronous-tests) that explains how to do it, but the example code given there doesn't lend itself very well to a test such as the above, where multiple checks are performed.
Since it relies on resolving the promise to a string in the case where no exception was thrown, it requires nesting for each separate assertion so that test failures aren't skipped over.

```js
function validateTypeError(e) {
  if (!(e instanceof TypeError)) {
    throw new Test262Error("Expected TypeError but got " + e);
  }
}

Array.fromAsync([], null).then(function () {
  return "null mapfn: Expected exception to be thrown";
}).then($DONE, function (e) {
  validateTypeError(e);
  return Array.fromAsync([], {}).then(function () {
    return "non-callable object mapfn: Expected exception to be thrown";
  }).then($DONE, function (e) {
    validateTypeError(e);
	 // return Array.fromAsync(... etc.
  });
}).then($DONE, $DONE);
```

The ad-hoc validation function also doesn't catch the edge cases that `assert.throws()` does.
It could be made to do so, but that means extra effort and boilerplate for test writers, and extra verification effort for maintainers.

## Reference-level explanation

This section describes in detail the features that would be provided by including `asyncHelpers.js`.
Each one would be accompanied by tests in the `test/harness/` folder to verify that it works as described here.

### asyncTest(_testFunc_)

Including `asyncHelpers.js` in the frontmatter defines a function `asyncTest` in the global namespace.

- _testFunc_: a function, representing the test body, that takes no arguments and returns a promise.
- Returns: `undefined`.

Including `asyncHelpers.js` in the frontmatter defines a new `asyncTest` property on the global object.

The `asyncTest` function calls _testFunc_ to obtain a result. If this produces a synchronous error, `$DONE` is called with the error. Otherwise, it awaits the result of _testFunc_.
If _testFunc_'s thenable is fulfilled, the fulfillment value is discarded, and `$DONE` is called with no argument.
If _testFunc_'s thenable rejects, `$DONE` is called with the rejection value as its argument.

When `asyncTest` has returned, then the promise representing the test body has been created, the test will either pass or fail, and `$DONE` will be called exactly once with the appropriate argument.

Before `asyncTest` does anything, it checks whether there is a `$DONE` property on the global object.
If there isn't, it throws an exception synchronously.
(The purpose of this is to catch an async test that mistakenly omits the `async` flag.
For this reason, it's worth departing from the convention that results from a function must be always synchronous or always asynchronous ("summoning Zalgo"); in this case the runtime will be treating the test file as a synchronous test.)

### assert.throwsAsync(_expectedErrorConstructor_, _func_[, _message_])
- _expectedErrorConstructor_: an error constructor, such as `TypeError`.
- _func_: a function that returns a thenable.
- _message_ (optional): a string with explanation that will be printed on failure.
- Returns: a thenable (the "returned promise".)

Including `asyncHelpers.js` in the frontmatter defines a new `throwsAsync` property on the `assert` object.

If _func_ is a function, it is first executed in order to obtain a thenable (the "inner thenable".).

The returned promise rejects with a Test262Error with an appropriate message, in the following cases:
- _func_ is not a function.
- _func_ is a function, and synchronously threw an error when obtaining the inner thenable.
- _func_ is a function, and didn't return a thenable when executed.
- The inner thenable throws a synchronous error when invoking `.then`
- The inner thenable is fulfilled.
- The inner thenable rejects with a primitive value.
- The inner thenable rejects with an object whose `constructor` property is not the same value as _expectedErrorConstructor_.

Just as in `assert.throws()`, the Test262Error's message takes into account the case where the inner thenable's rejection value is an Error constructor with the same name as _expectedErrorConstructor_ but is not the same value, which can happen when the constructor comes from a different global.

If the inner thenable rejects with the appropriate type of error object (constructor is the same value as _expectedErrorConstructor_), the returned thenable is fulfilled with `undefined`, so that the resolution value can be passed to `$DONE`.

Although `assert.throwsAsync()` is designed to be used with await-style async programming, it can also be used with promise-style, postfixing it with `.then($DONE, $DONE)`.
Chaining returned promises from `assert.throwsAsync()` works as might be expected: if any of them reject, the rejection value is passed directly to `$DONE()` and the subsequent calls are not made.

## Drawbacks

Some reasons not to do this, based on previous discussions about adding helpers, might be: concerns about increasing the number of helpers; or a belief that the existing facilities for testing asynchronous features are sufficient.

As might be expected from the author of this RFC, I believe the potential utility, given the proposals that are coming to JS in the near future, outweighs these potential drawbacks.
It is true that more helpers means more code to maintain, but I think that is better than having more ad-hoc code in the tests.

## Rationale and alternatives

### What other designs have been considered and what is the rationale for not choosing them?

I picked this design because it uses similar conventions to the assertion functions that are already part of the test harness.
However, I think many other equivalent designs would be just as good (see Prior Art and Unresolved Questions below), and I'm not attached to any particular one, as long as it's easy to use.

Based on other assertion APIs considered below in Prior Art, other possible helpers were considered, for example a helper that asserts that a promise is fulfilled with a certain value.
However, those use cases seem to be adequately covered by the existing assertion APIs in the test harness.
For example, although Jasmine has a facility for asserting that a promise is fulfilled with a certain value, it seems easy enough to write such a test with test262's existing facilities without introducing the risk of extra copy-paste boilerplate:
```javascript
// Jasmine
await expectAsync(func()).toBeResolvedTo(true);
// test262
assert.sameValue(await func(), true, "...");
```

An alternative design for `asyncTest()` was originally a new flag with the strawperson name of `autoAsync`.
Instead of wrapping the test body in an async function passed to `asyncTest()`, the test writer would include the flag in the frontmatter, which would automatically imply the `async` flag:
```javascript
/*---
...
flags: [autoAsync]
includes: [asyncHelpers.js]
---*/
```
and then write the test body directly in the test file.

That way, the test could be written using toplevel await syntax even if the implementation did not recognize such syntax, and without the need to use `asyncTest()`.

Although it would introduce even more convenience for test writers, this design seemed more risky because it would require implementations to accommodate it in their test runners.

### What is the impact of not doing this?

I expect that with Array.fromAsync() and iterator helpers, we'd see a proliferation in future contributions of ad-hoc implementations of what this RFC proposes, that would require effort from the maintainers to keep consistent with each other.
Since asynchronous programming is difficult to reason about, it's likely some of these ad-hoc implementations would be incorrect, or correct but incomplete.

To a certain extent, we have this proliferation of ad-hoc implementations already in the tests for dynamic import expressions.
For example, many of the existing tests in [`test/language/expressions/dynamic-import/catch`](https://github.com/tc39/test262/tree/main/test/language/expressions/dynamic-import/catch) use the following pattern:
```js
let f = () => {
  import(someImportThatFails).catch(error => {
    assertSomethingAbout(error);
  }).then($DONE, $DONE);
};
f();
```
Tests written like this will correctly pass if the import Promise is rejected, and will correctly fail if the import succeeds (due to the imported module object being passed to `$DONE`.)
However, at a first glance, it's not immediately clear that the test is correct in the case of the import succeeding; in fact in an earlier draft of this RFC I thought the test was incorrect.

Others, such as [`test/language/expressions/dynamic-import/import-attributes/2nd-param-non-object.js`](https://github.com/tc39/test262/blob/main/test/language/expressions/dynamic-import/import-attributes/2nd-param-non-object.js), use a pattern more like what is proposed in this RFC. However, this pattern doesn't format the messages as helpfully in all the edge cases that `assert.throws()` does, such as:

- the Promise being rejected with a primitive value;
- the error constructor being a different object with the same name, such as a different iframe's TypeError;
- the test harness API being called with the wrong number of arguments.

The precedent for helpful error messages set by `assert.throws()` can help implementors debug their implementations against test262, and that would likely not be present if this pattern was copied around from file to file.

## Prior art

The most important prior art is the existing assertions API in test262.
Any new test harness API should "feel" the same as the existing API, so, for example, [`assert.throws()`](https://github.com/tc39/test262/blob/f6c48f333e7d16bf11b30cd29b4ea9ac0354f142/harness/assert.js#L68) is the biggest influence on the design of `assert.throwsAsync()`.

The rest of this section will give a tour of equivalent facilities in other related JS testing frameworks.

### Web Platform Tests

WPT has had a [Promise tests](https://web-platform-tests.org/writing-tests/testharness-api.html#promise_test) API for defining async tests since [2014](https://github.com/w3c/testharness.js/pull/82).
The design of `asyncTest()` is based on WPT's `promise_test()`.

WPT also has some [`promise_rejects_...()` APIs](https://web-platform-tests.org/writing-tests/testharness-api.html#promise-rejection) which are used for assertions within tests.

```js
promise_test(async t => {
  await promise_rejects_js(t, TypeError, Array.fromAsync([], null));
}, "null mapfn");
```

The `promise_rejects_js()` is relevant to the design of this RFC; `promise_rejects_exactly()` tests that a Promise is rejected with an exact value, not an Error constructor, but it seems like test262 doesn't have a big enough use case for a synchronous version of that functionality, so probably not for an asynchronous one either.

More than one call to `promise_rejects_js()` could be awaited inside a `promise_test()` body, but WPT's use of subtests that report their results independently means that this rarely makes sense.

### BDD-style

The `describe()`/`it()` "BDD" (behaviour-driven development) style of test harness exists across several different tools, the most well-known being Jest (19M downloads/week), Mocha (8M), and Jasmine (1.9M).
In Jasmine, an asynchronous test is created automatically by supplying async functions where a synchronous test would otherwise supply normal functions.
Assertions are performed using `expectAsync()` instead of the normal `expect()`, which returns an object that has methods such as `toBeResolvedTo()`, `toBeRejectedWithError()`, etc.
Jest and Mocha have the same or very similar APIs for defining asynchronous tests.
Mocha doesn't provide its own assertions API, while Jest has a slightly different but equivalent style.
```js
it("rejects a non-callable mapfn", async function () {
  // Jasmine
  await expectAsync(Array.fromAsync([], null))
	.toBeRejectedWithError(TypeError);
  // Jest
  await expect(Array.fromAsync([], null))
    .rejects.toThrow(TypeError);
});
```

Looking at the Jasmine issue tracker, they [say](https://github.com/jasmine/jasmine/issues/1547) that `expectAsync()` was an often-requested feature (e.g. [here](https://github.com/jasmine/jasmine/issues/1447), which contains a discussion of why they couldn't make one API that handled both sync and async; which I believe applies to test262 as well.)
A discussion of adding `toBeRejectedWithError()` to Jasmine is [here](https://github.com/jasmine/jasmine/issues/1625).
It speaks to the general usefulness of this API that several of these major BDD-style test harnesses adopted it.

### Node `assert` module

Node's built-in `assert` module has included an `assert.rejects()` API since version 10 (2018).
It behaves much like the `assert.throwsAsync()` in this RFC:

```javascript
await assert.rejects(Array.fromAsync([], null), TypeError,
  "null mapfn");
```

Node also has `assert.doesNotReject()`, but in test262 we would just express this by not throwing in the body of the function passed to `asyncTest()`.

Some iteration on the design is in [this pull request](https://github.com/nodejs/node/pull/18023), with previous discussion [here](https://github.com/nodejs/node/pull/17843) indicating why they, like Jasmine, couldn't make one API that handled both sync and async.

Node built-in assertions are often used in combination with Mocha which doesn't include its own assertions API.

## Unresolved questions

The design of the API suggested in this RFC is intended to be complete and implementable.
However, as mentioned above in Rationale, I'm not particularly attached to that API, so if the RFC process surfaces a better design, great!

I'm hoping the RFC process will also help to identify any additional features that would be useful but that I missed in the original design.

## Future possibilities

The intention of this RFC is to provide tools necessary for testing the behaviour of built-in asynchronous functions.
Other testing needs might be revealed in the future by writing tests, if more asynchronous functions are added to ECMA-262 or ECMA-402.

Given the iterator helpers proposal, a related but separate RFC might be useful to improve the experience of testing both synchronous and asynchronous iterators.

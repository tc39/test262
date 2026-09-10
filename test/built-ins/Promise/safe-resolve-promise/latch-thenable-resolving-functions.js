// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: >
    The pair of resolving functions passed to a deferred "then" shares a single
    latch: the first settlement wins and the rest are no-ops.
info: |
    PerformPromiseResolveThenable ( promiseToResolve, thenable, then )

    1. Let _resolvingFunctions_ be CreateResolvingFunctions(_promiseToResolve_).
    2. If _then_ is a function object, then
      a. Let _thenCallResult_ be Completion(Call(_then_, _thenable_,
         « _resolvingFunctions_.[[Resolve]],
         _resolvingFunctions_.[[Reject]] »)).
    ...
    4. If _thenCallResult_ is an abrupt completion, then
      a. Return ! Call(_resolvingFunctions_.[[Reject]], *undefined*,
         « _thenCallResult_.[[Value]] »).

    CreateResolvingFunctions ( toResolve )

    1. Let _promiseOrEmpty_ be the Record { [[Value]]: _toResolve_ }.
    2. Let _resolveSteps_ be a new Abstract Closure with parameters
       (_resolution_) that captures _promiseOrEmpty_ ...
      a. If _promiseOrEmpty_.[[Value]] is ~empty~, return *undefined*.

    Both functions close over the same Record, so using either one spends the
    pair. Step 4 relies on this: a "then" which resolves and then throws must
    keep its resolution rather than be rejected by the throw.
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

asyncTest(function() {
  // resolve then reject: the rejection is ignored.
  var resolveFirst = Promise.withResolvers();
  $262.safeResolvePromise(resolveFirst.promise, {
    then: function(resolve, reject) {
      resolve("resolved first");
      reject(new Error("must be ignored"));
    },
  });
  var resolveFirstCheck = resolveFirst.promise.then(
    function(settledValue) {
      assert.sameValue(
        settledValue,
        "resolved first",
        "a later reject cannot overtake the resolution"
      );
    },
    function(reason) {
      throw new Test262Error("the promise must not be rejected: " + reason);
    }
  );

  // reject then resolve: the resolution is ignored.
  var rejectReason = new Error("rejected first");
  var rejectFirst = Promise.withResolvers();
  $262.safeResolvePromise(rejectFirst.promise, {
    then: function(resolve, reject) {
      reject(rejectReason);
      resolve("must be ignored");
    },
  });
  var rejectFirstCheck = rejectFirst.promise.then(
    function(settledValue) {
      throw new Test262Error("the promise must not be fulfilled: " + settledValue);
    },
    function(reason) {
      assert.sameValue(
        reason,
        rejectReason,
        "a later resolve cannot overtake the rejection"
      );
    }
  );

  // resolve then throw: PerformPromiseResolveThenable step 4 calls the spent
  // reject function, which is a no-op.
  var resolveThenThrow = Promise.withResolvers();
  $262.safeResolvePromise(resolveThenThrow.promise, {
    then: function(resolve) {
      resolve("resolved before throwing");
      throw new Error("must be ignored");
    },
  });
  var resolveThenThrowCheck = resolveThenThrow.promise.then(
    function(settledValue) {
      assert.sameValue(
        settledValue,
        "resolved before throwing",
        "an exception after resolving cannot reject the promise"
      );
    },
    function(reason) {
      throw new Test262Error("the promise must not be rejected: " + reason);
    }
  );

  return Promise.all([resolveFirstCheck, rejectFirstCheck, resolveThenThrowCheck]);
});

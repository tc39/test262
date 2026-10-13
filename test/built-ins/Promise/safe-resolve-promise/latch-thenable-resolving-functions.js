// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: >
    The pair of resolving functions passed to a deferred "then" shares a single
    latch: the first settlement wins and the rest are no-ops.
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

asyncTest(function() {
  // resolve then reject: the rejection is ignored.
  var resolveFirst = Promise.withResolvers();
  $262.safeResolvePromise(resolveFirst, {
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
  $262.safeResolvePromise(rejectFirst, {
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
  $262.safeResolvePromise(resolveThenThrow, {
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

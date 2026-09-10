// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve is a no-op on a promise whose resolving functions have
    already been used.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    1. If RequiresDeferredPromiseResolution(_resolution_) is *false*, then
      a. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
         « _resolution_ »).
    ...
    7. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
       « _wrapper_ »).
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var thenCallCount = 0;
var thenable = {
  then: function(resolve) {
    thenCallCount += 1;
    resolve("must not be observed");
  },
};

asyncTest(function() {
  // Already fulfilled.
  var fulfilled = Promise.withResolvers();
  fulfilled.resolve("fulfilled first");
  $262.safeResolvePromise(fulfilled.promise, thenable);

  var fulfilledCheck = fulfilled.promise.then(function(settledValue) {
    assert.sameValue(
      settledValue,
      "fulfilled first",
      "the promise keeps its original value"
    );
  });

  // Already rejected.
  var reason = new Error("rejected first");
  var rejected = Promise.withResolvers();
  rejected.reject(reason);
  $262.safeResolvePromise(rejected.promise, thenable);

  var rejectedCheck = rejected.promise.then(
    function() {
      throw new Test262Error("an already-rejected promise must stay rejected");
    },
    function(settledReason) {
      assert.sameValue(settledReason, reason, "the promise keeps its original reason");
    }
  );

  return Promise.all([fulfilledCheck, rejectedCheck]).then(function() {
    assert.sameValue(
      thenCallCount,
      0,
      "the ignored resolution's \"then\" is never called"
    );
  });
});

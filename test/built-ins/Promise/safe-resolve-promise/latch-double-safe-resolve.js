// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    A second call to SafePromiseResolve on the same promise is a no-op; the
    first resolution wins.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    7. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
       « _wrapper_ »).
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

asyncTest(function() {
  // Both resolutions would be deferred.
  var secondThenCallCount = 0;

  var deferred = Promise.withResolvers();
  $262.safeResolvePromise(deferred.promise, {
    then: function(resolve) {
      resolve("first");
    },
  });
  $262.safeResolvePromise(deferred.promise, {
    then: function(resolve) {
      secondThenCallCount += 1;
      resolve("second");
    },
  });

  var deferredCheck = deferred.promise.then(function(settledValue) {
    assert.sameValue(settledValue, "first", "the first resolution wins");
    assert.sameValue(
      secondThenCallCount,
      0,
      "the second resolution's \"then\" is never called"
    );
  });

  // A deferred resolution followed by one which would be synchronous.
  var mixed = Promise.withResolvers();
  $262.safeResolvePromise(mixed.promise, {
    then: function(resolve) {
      resolve("deferred first");
    },
  });
  $262.safeResolvePromise(mixed.promise, "synchronous second");

  var mixedCheck = mixed.promise.then(function(settledValue) {
    assert.sameValue(
      settledValue,
      "deferred first",
      "a subsequent synchronous resolution cannot overtake a deferred one"
    );
  });

  return Promise.all([deferredCheck, mixedCheck]);
});

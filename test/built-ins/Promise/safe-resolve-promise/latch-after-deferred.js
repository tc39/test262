// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    A promise whose resolution was deferred is already latched on return from
    SafePromiseResolve: later calls to its resolving functions are no-ops.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    ...
    5. Let _wrapper_ be OrdinaryObjectCreate(*null*).
    6. Perform ! CreateDataPropertyOrThrow(_wrapper_, *"then"*, _deferredThen_).
    7. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
       « _wrapper_ »).
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy]
---*/

function mustNotReject(reason) {
  throw new Test262Error("promise was rejected: " + reason);
}

asyncTest(function() {
  // A thenable resolution, raced by both resolving functions.
  var thenCallCount = 0;
  var raced = Promise.withResolvers();
  $262.safeResolvePromise(raced.promise, {
    then: function(resolve) {
      thenCallCount += 1;
      resolve("from the thenable");
    },
  });
  raced.resolve("racing resolve");
  raced.reject("racing reject");

  var racedCheck = raced.promise.then(function(settledValue) {
    assert.sameValue(
      settledValue,
      "from the thenable",
      "the deferred resolution wins over both racing calls"
    );
    assert.sameValue(thenCallCount, 1, "the thenable's \"then\" still runs exactly once");
  }, mustNotReject);

  // A thenable resolution, raced by reject alone.
  var rejected = Promise.withResolvers();
  $262.safeResolvePromise(rejected.promise, {
    then: function(resolve) {
      resolve("still fulfilled");
    },
  });
  rejected.reject(new Error("must be ignored"));

  var rejectedCheck = rejected.promise.then(function(settledValue) {
    assert.sameValue(
      settledValue,
      "still fulfilled",
      "the deferred resolution wins over the racing reject"
    );
  }, mustNotReject);

  // A deferred resolution which is not a thenable at all.
  var proxy = new Proxy({}, {});
  var nonThenable = Promise.withResolvers();
  $262.safeResolvePromise(nonThenable.promise, proxy);
  nonThenable.resolve("racing resolve");

  var nonThenableCheck = nonThenable.promise.then(function(settledValue) {
    assert.sameValue(
      settledValue,
      proxy,
      "the promise is fulfilled with the deferred resolution, not the racing value"
    );
  }, mustNotReject);

  return Promise.all([racedCheck, rejectedCheck, nonThenableCheck]);
});

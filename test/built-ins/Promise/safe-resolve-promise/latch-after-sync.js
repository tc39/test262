// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    A promise resolved through the synchronous path of SafePromiseResolve is
    latched: later calls to its resolving functions are no-ops.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    1. If RequiresDeferredPromiseResolution(_resolution_) is *false*, then
      a. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
         « _resolution_ »).
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

asyncTest(function() {
  var capability = Promise.withResolvers();

  $262.safeResolvePromise(capability.promise, "first");
  capability.resolve("racing resolve");
  capability.reject("racing reject");

  return capability.promise.then(
    function(settledValue) {
      assert.sameValue(
        settledValue,
        "first",
        "the promise keeps the value it was resolved with"
      );
    },
    function(reason) {
      throw new Test262Error(
        "the racing reject must not reject an already-resolved promise: " + reason
      );
    }
  );
});

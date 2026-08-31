// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    Resolving a promise with itself through SafePromiseResolve rejects it
    synchronously when the promise does not look thenable.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    1. If RequiresDeferredPromiseResolution(_resolution_) is *false*, then
      a. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
         « _resolution_ »).

    CreateResolvingFunctions ( toResolve ), resolve steps

    4. Perform ? PerformPromiseResolution(_promise_, _resolution_, ~sync~).

    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    2. If SameValue(_resolution_, _promise_) is *true*, then
      a. Let _selfResolutionError_ be a newly created *TypeError* object.
      b. Perform RejectPromise(_promise_, _selfResolutionError_).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// SafePromiseResolve does not special-case a resolution which is the promise
// itself; the self-resolution check belongs to PerformPromiseResolution, which
// both paths reach. Shadowing "then" with a non-callable value makes
// RequiresDeferredPromiseResolution report false, so the synchronous path runs
// and the TypeError is reported one microtask earlier than in
// deferred-self-resolution.js. The rejection timing of a self resolution
// therefore depends on whether the promise looks thenable.
var expected = [
  "start",
  "tick 1",

  // Rejected during the synchronous section, so its reaction is already queued.
  "rejected",

  "tick 2",
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a synchronous self resolution");
    });

  var capability = Promise.withResolvers();
  Object.defineProperty(capability.promise, "then", {
    value: 42,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  $262.safeResolvePromise(capability.promise, capability.promise);
  actual.push("start");

  // "then" is shadowed on the promise, so reactions must be attached through
  // Promise.prototype.then directly.
  var settled = Promise.prototype.then.call(
    capability.promise,
    function(settledValue) {
      throw new Test262Error("the promise must not be fulfilled: " + settledValue);
    },
    function(reason) {
      actual.push("rejected");
      assert.sameValue(
        reason instanceof TypeError,
        true,
        "the promise is rejected with a TypeError"
      );
    }
  );

  return Promise.all([ruler, settled]);
});

// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    Resolving with a still-pending native promise via SafePromiseResolve takes
    the same number of microtasks as an ordinary resolution.
info: |
    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    9. If _thenCallTiming_ is ~deferred~, then
      a. Perform ! PerformPromiseResolveThenable(_promise_, _resolution_,
         _thenAction_).
      b. Return ~unused~.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// As for an already-fulfilled inner promise, the two paths settle in the same
// microtask, shown by the two settlements being adjacent and in the order their
// reactions were attached.
var expected = [
  "start",

  "tick 1",
  "tick 2",
  "tick 3",

  // Were the safe path to take an extra microtask, these two would swap.
  "settled safe",
  "settled ordinary",
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => actual.push("tick 3"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for resolving with a pending promise"
      );
    });

  var safeInner = Promise.withResolvers();
  var safe = Promise.withResolvers();
  $262.safeResolvePromise(safe.promise, safeInner.promise);
  var safeSettled = safe.promise.then(function(settledValue) {
    actual.push("settled safe");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });
  safeInner.resolve("inner");

  var ordinaryInner = Promise.withResolvers();
  var ordinary = Promise.withResolvers();
  ordinary.resolve(ordinaryInner.promise);
  var ordinarySettled = ordinary.promise.then(function(settledValue) {
    actual.push("settled ordinary");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });
  ordinaryInner.resolve("inner");

  actual.push("start");

  return Promise.all([ruler, safeSettled, ordinarySettled]);
});

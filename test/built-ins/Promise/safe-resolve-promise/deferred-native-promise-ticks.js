// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    Resolving with an already-fulfilled native promise via SafePromiseResolve
    takes the same number of microtasks as an ordinary resolution.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// A native promise has a callable "then" reachable without running user code, so
// an ordinary resolution already enqueues a job for it. In the deferred job
// _thenCallTiming_ is ~deferred~, so the "then" call is performed inline rather
// than in a further job, and the two paths settle in the same microtask.
//
// The tick each settlement lands on is fully determined by the spec given this
// test's construction, but it is not a count of the resolution's own microtasks:
// it also reflects the interleaving with the ruler. What carries the claim here
// is that the two settlements are adjacent, in the order their reactions were
// attached.
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
        "Ticks for resolving with an already-fulfilled promise"
      );
    });

  var safe = Promise.withResolvers();
  $262.safeResolvePromise(safe, Promise.resolve("inner"));
  var safeSettled = safe.promise.then(function(settledValue) {
    actual.push("settled safe");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });

  var ordinary = Promise.withResolvers();
  ordinary.resolve(Promise.resolve("inner"));
  var ordinarySettled = ordinary.promise.then(function(settledValue) {
    actual.push("settled ordinary");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });

  actual.push("start");

  return Promise.all([ruler, safeSettled, ordinarySettled]);
});

// Copyright (C) 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: Resolving with a still-pending native promise via SafePromiseResolve takes the same number of microtasks as an ordinary resolution, including when resolution at a later time.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// Both assimilation jobs encounter pending promises. Fulfill them after they
// have attached their reactions, and compare the order of the settlements.
var expected = [
  "start",

  "tick 1",
  "fulfill inner",
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
        "Ticks for promises that remain pending through assimilation"
      );
    });

  var safeInner = Promise.withResolvers();
  var safe = Promise.withResolvers();
  $262.safeResolvePromise(safe.promise, safeInner.promise);
  var safeSettled = safe.promise.then(function(settledValue) {
    actual.push("settled safe");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });

  var ordinaryInner = Promise.withResolvers();
  var ordinary = Promise.withResolvers();
  ordinary.resolve(ordinaryInner.promise);
  var ordinarySettled = ordinary.promise.then(function(settledValue) {
    actual.push("settled ordinary");
    assert.sameValue(settledValue, "inner", "fulfilled with the inner promise's value");
  });

  var fulfilled = Promise.resolve(0).then(function() {
    actual.push("fulfill inner");
    safeInner.resolve("inner");
    ordinaryInner.resolve("inner");
  });

  actual.push("start");

  return Promise.all([ruler, safeSettled, ordinarySettled, fulfilled]);
});

// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve fulfills synchronously when the resolution is not an
    Object.
info: |
    RequiresDeferredPromiseResolution ( value )

    1. If _value_ is not an Object, return *false*.

    SafePromiseResolve ( promiseCapability, resolution )

    1. If RequiresDeferredPromiseResolution(_resolution_) is *false*, then
      a. Return ? Call(_promiseCapability_.[[Resolve]], *undefined*,
         « _resolution_ »).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Symbol, BigInt]
---*/

var expected = [
  "start",
  "tick 1",

  // Each promise was resolved during the synchronous section, so all of their
  // reactions were queued before "tick 2".
  "settled undefined",
  "settled null",
  "settled boolean",
  "settled number",
  "settled string",
  "settled symbol",
  "settled bigint",

  "tick 2",
];

var values = [
  ["undefined", undefined],
  ["null", null],
  ["boolean", true],
  ["number", 42],
  ["string", "then"],
  ["symbol", Symbol("desc")],
  ["bigint", 17n],
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for non-object resolutions");
    });

  var checks = [];

  values.forEach(function(entry) {
    var label = entry[0];
    var value = entry[1];

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability.promise, value);

    checks.push(capability.promise.then(function(settledValue) {
      actual.push("settled " + label);
      assert.sameValue(
        settledValue,
        value,
        "promise is fulfilled with the resolution: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

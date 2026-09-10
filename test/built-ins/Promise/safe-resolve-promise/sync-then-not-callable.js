// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve fulfills synchronously when the resolution has an own
    "then" data property whose value is not callable.
info: |
    RequiresDeferredPromiseResolution ( value )

    3. Let _thenValue_ be ! _value_.[[Get]](*"then"*).
    4. If IsCallable(_thenValue_) is *true*, return *true*.
    5. Return *false*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Symbol]
---*/

var expected = [
  "start",
  "tick 1",

  // Each promise was resolved during the synchronous section, so all of their
  // reactions were queued before "tick 2".
  "settled then: undefined",
  "settled then: null",
  "settled then: number",
  "settled then: string",
  "settled then: symbol",
  "settled then: object",

  "tick 2",
];

var thenValues = [
  ["undefined", undefined],
  ["null", null],
  ["number", 42],
  ["string", "then"],
  ["symbol", Symbol("then")],
  ["object", {}],
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a non-callable \"then\"");
    });

  var checks = [];

  thenValues.forEach(function(entry) {
    var label = entry[0];
    var value = { then: entry[1] };

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability.promise, value);

    checks.push(capability.promise.then(function(settledValue) {
      actual.push("settled then: " + label);
      assert.sameValue(
        settledValue,
        value,
        "promise is fulfilled with the resolution itself, then: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

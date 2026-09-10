// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve defers resolution when the resolution is a Proxy exotic
    object, even when its handler defines no traps.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    2. If _o_ has the [[GetPrototypeOf]] and [[GetOwnProperty]] internal methods
       as defined in Proxy Object Internal Methods and Internal Slots, return
       *true*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy]
---*/

var expected = [
  "start",

  "tick 1",
  "tick 2",

  // Every resolution was deferred to a job, so each settlement lands after
  // "tick 2" rather than before it, whatever the target's own shape was.
  "settled plain object",
  "settled non-callable then",
  "settled array",
  "settled function",
];

// The target's own shape must not matter: deferral is forced by the Proxy.
var targets = [
  ["plain object", {}],
  ["non-callable then", { then: 42 }],
  ["array", []],
  ["function", function() {}],
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for Proxy resolutions");
    });

  var checks = [];

  targets.forEach(function(entry) {
    var label = entry[0];
    var value = new Proxy(entry[1], {});

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability.promise, value);

    checks.push(capability.promise.then(function(settledValue) {
      actual.push("settled " + label);
      assert.sameValue(
        settledValue,
        value,
        "promise is fulfilled with the Proxy itself: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

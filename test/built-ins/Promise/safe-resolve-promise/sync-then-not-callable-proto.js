// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve fulfills synchronously when a non-callable "then" data
    property is inherited from the prototype chain.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  "start",
  "tick 1",

  // Walking the chain to find a non-callable "then" cannot run user code,
  // however deep the chain is, so both promises settle before "tick 2".
  "settled immediate",
  "settled deep",

  "tick 2",
];

// Inherited from the immediate prototype, and from further up a chain rooted at
// a null prototype.
var deepRoot = Object.create(null);
deepRoot.then = "not callable";

var values = [
  ["immediate", Object.create({ then: 42 })],
  ["deep", Object.create(Object.create(Object.create(deepRoot)))],
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for an inherited non-callable \"then\""
      );
    });

  var checks = [];

  values.forEach(function(entry) {
    var label = entry[0];
    var value = entry[1];

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability, value);

    checks.push(capability.promise.then(function(settledValue) {
      actual.push("settled " + label);
      assert.sameValue(
        settledValue,
        value,
        "promise is fulfilled with the resolution itself: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

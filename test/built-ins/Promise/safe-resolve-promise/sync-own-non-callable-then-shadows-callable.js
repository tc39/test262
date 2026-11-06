// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve fulfills synchronously when an own non-callable "then"
    data property shadows a callable "then" on the prototype chain.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // The chain walk stops at the own "then", never reaching the callable one.
  "start",
  "tick 1",

  // Resolved during the synchronous section, so its reaction is already queued.
  "settled",

  "tick 2",
];

var actual = [];

var proto = {
  then: function(resolve) {
    actual.push("call inherited then");
    resolve("from the prototype");
  },
};

var value = Object.create(proto);
value.then = 42;

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for a shadowed callable \"then\""
      );
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      value,
      "promise is fulfilled with the resolution itself"
    );
  });

  return Promise.all([ruler, settled]);
});

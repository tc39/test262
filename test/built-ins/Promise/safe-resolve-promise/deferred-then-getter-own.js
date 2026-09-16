// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve defers resolution when the resolution has an own "then"
    getter, and the getter runs in the deferred job.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // SafePromiseResolve returns without reading "then".
  "start",

  "tick 1",

  // The deferred job reads "then" and calls it.
  "get then",
  "call then",

  "tick 2",
  "settled",
];

var actual = [];

var value = {
  get then() {
    actual.push("get then");
    return function(resolve) {
      actual.push("call then");
      resolve("from the getter");
    };
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a deferred \"then\" getter");
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      "from the getter",
      "promise is fulfilled with the value passed to the resolving function"
    );
  });

  return Promise.all([ruler, settled]);
});

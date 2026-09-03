// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    An object with a null prototype resolves synchronously even when
    Object.prototype has a callable "then".
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    8. If _proto_ is *null*, return *false*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // The chain walk ends at the null prototype without reaching
  // Object.prototype, so the promise is fulfilled here rather than in a job.
  "start",
  "tick 1",

  // Resolved during the synchronous section, so its reaction is already queued.
  "settled",

  "tick 2",
];

var actual = [];

var thenCallCount = 0;
var value = Object.create(null);

Object.defineProperty(Object.prototype, "then", {
  value: function(resolve) {
    thenCallCount += 1;
    resolve("from Object.prototype");
  },
  writable: true,
  enumerable: false,
  configurable: true,
});

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      try {
        assert.compareArray(
          actual,
          expected,
          "Ticks for a null-prototype object"
        );
        assert.sameValue(
          thenCallCount,
          0,
          "Object.prototype.then is never called"
        );
      } finally {
        delete Object.prototype.then;
      }
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
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

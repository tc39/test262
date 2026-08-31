// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    A callable "then" on Object.prototype defers resolution of an ordinary
    object.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    8. If _proto_ is *null*, return *false*.
    9. Return PropertyAccessCouldRunUserCode(_proto_, _propertyKey_, _kind_).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // Nothing has run yet: the inherited "then" was not called synchronously.
  "start",

  "tick 1",

  // The deferred job calls the inherited "then".
  "call Object.prototype.then",

  "tick 2",

  // Resolved from the deferred job, so its reaction runs after it.
  "settled",
];

var actual = [];

var thenCalledWith;
var value = {};

Object.defineProperty(Object.prototype, "then", {
  value: function(resolve) {
    actual.push("call Object.prototype.then");
    thenCalledWith = this;
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
          "Ticks for a callable Object.prototype.then"
        );
        assert.sameValue(
          thenCalledWith,
          value,
          "\"then\" is called with the resolution as its this value"
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
      "from Object.prototype",
      "the inherited \"then\" resolves the promise"
    );
  });

  return Promise.all([ruler, settled]);
});

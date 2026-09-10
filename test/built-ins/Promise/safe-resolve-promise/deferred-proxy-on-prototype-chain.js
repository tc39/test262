// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve defers resolution when an ordinary object has a Proxy on
    its prototype chain.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    2. If _o_ has the [[GetPrototypeOf]] and [[GetOwnProperty]] internal methods
       as defined in Proxy Object Internal Methods and Internal Slots, return
       *true*.
    ...
    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    8. If _proto_ is *null*, return *false*.
    9. Return PropertyAccessCouldRunUserCode(_proto_, _propertyKey_, _kind_).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy]
---*/

var actual = [];

// The Proxy is the immediate prototype, and further up the chain behind
// ordinary objects.
function makeValue(label, depth) {
  var proxyProto = new Proxy({}, {
    get: function(target, key, receiver) {
      actual.push("get:" + String(key) + " " + label);
      return Reflect.get(target, key, receiver);
    },
  });

  var value = proxyProto;
  for (var i = 0; i < depth; i += 1) {
    value = Object.create(value);
  }
  return value;
}

var expected = [
  "start",

  "tick 1",

  // Each deferred job performs its own "then" lookup.
  "get:then immediate",
  "get:then deep",

  "tick 2",

  // No callable "then" is found, so each promise fulfills with the resolution.
  "settled immediate",
  "settled deep",
];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for a Proxy on the prototype chain"
      );
    });

  var checks = [];

  [["immediate", 1], ["deep", 3]].forEach(function(entry) {
    var label = entry[0];
    var value = makeValue(label, entry[1]);

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability.promise, value);

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

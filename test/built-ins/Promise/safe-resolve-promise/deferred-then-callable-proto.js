// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve defers the call to a callable "then" inherited from the
    prototype chain.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    8. If _proto_ is *null*, return *false*.
    9. Return PropertyAccessCouldRunUserCode(_proto_, _propertyKey_, _kind_).

    RequiresDeferredPromiseResolution ( value )

    3. Let _thenValue_ be ! _value_.[[Get]](*"then"*).
    4. If IsCallable(_thenValue_) is *true*, return *true*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var actual = [];

var proto = {
  then: function(resolve) {
    actual.push("call then " + this.label);
    resolve("from the prototype: " + this.label);
  },
};

var expected = [
  "start",

  "tick 1",

  // Each deferred job calls the inherited "then".
  "call then immediate",
  "call then deep",

  "tick 2",

  // Each promise was resolved during its job, so its reaction runs after it.
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
        "Ticks for a deferred inherited callable \"then\""
      );
    });

  // Directly inherited, and inherited from further up the chain.
  var checks = [];

  [["immediate", 1], ["deep", 3]].forEach(function(entry) {
    var label = entry[0];

    var value = proto;
    for (var i = 0; i < entry[1]; i += 1) {
      value = Object.create(value);
    }
    value.label = label;

    var capability = Promise.withResolvers();
    $262.safeResolvePromise(capability.promise, value);

    checks.push(capability.promise.then(function(settledValue) {
      actual.push("settled " + label);
      assert.sameValue(
        settledValue,
        "from the prototype: " + label,
        "promise is fulfilled with the value passed to the resolving function: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve fulfills synchronously when the resolution is an ordinary
    object with no "then" property anywhere on its prototype chain.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    5. Let _desc_ be ! _o_.[[GetOwnProperty]](_propertyKey_).
    6. If _desc_ is not *undefined*, then
      ...
    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    8. If _proto_ is *null*, return *false*.
    9. Return PropertyAccessCouldRunUserCode(_proto_, _propertyKey_, _kind_).

    RequiresDeferredPromiseResolution ( value )

    3. Let _thenValue_ be ! _value_.[[Get]](*"then"*).
    4. If IsCallable(_thenValue_) is *true*, return *true*.
    5. Return *false*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  "start",
  "tick 1",

  // Each promise was resolved during the synchronous section, so all of their
  // reactions were queued before "tick 2".
  "settled plain object",
  "settled null prototype",
  "settled inherits from null prototype",
  "settled array",
  "settled function",
  "settled error",

  "tick 2",
];

// None of Object.prototype, Array.prototype, Function.prototype, Error.prototype
// nor a null prototype provides a "then" property.
var values = [
  ["plain object", {}],
  ["null prototype", Object.create(null)],
  ["inherits from null prototype", Object.create(Object.create(null))],
  ["array", [1, 2, 3]],
  ["function", function() {}],
  ["error", new Error("not a thenable")],
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for objects without \"then\"");
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
        "promise is fulfilled with the resolution itself: " + label
      );
    }));
  });

  actual.push("start");

  return Promise.all([ruler].concat(checks));
});

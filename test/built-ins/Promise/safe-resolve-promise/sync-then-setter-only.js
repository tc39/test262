// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve fulfills synchronously when the resolution has an own
    "then" accessor with a setter but no getter.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    6. If _desc_ is not *undefined*, then
      a. If IsAccessorDescriptor(_desc_) is *true*, then
        i. If _kind_ is either ~any~ or ~get~, and _desc_.[[Get]] is not
           *undefined*, return *true*.
        ii. If _kind_ is either ~any~ or ~set~, and _desc_.[[Set]] is not
            *undefined*, return *true*.
      b. Return *false*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // Reading a setter-only "then" cannot run user code, so this is not deferred.
  "start",
  "tick 1",

  // Resolved during the synchronous section, so its reaction is already queued.
  "settled",

  "tick 2",
];

var actual = [];

var setterCallCount = 0;
var value = {};
Object.defineProperty(value, "then", {
  set: function(_v) {
    setterCallCount += 1;
  },
  configurable: true,
});

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a setter-only \"then\"");
      assert.sameValue(setterCallCount, 0, "the setter is never called");
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

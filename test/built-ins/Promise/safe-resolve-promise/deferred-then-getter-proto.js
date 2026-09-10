// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: >
    SafePromiseResolve defers resolution when a "then" getter is inherited from
    the prototype chain, and the getter runs in the deferred job.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    6. If _desc_ is not *undefined*, then
      a. If IsAccessorDescriptor(_desc_) is *true*, then
        i. If _kind_ is either ~any~ or ~get~, and _desc_.[[Get]] is not
           *undefined*, return *true*.
    7. Let _proto_ be _o_.[[GetPrototypeOf]]().
    ...
    9. Return PropertyAccessCouldRunUserCode(_proto_, _propertyKey_, _kind_).
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

var value;
var proto = {
  get then() {
    actual.push("get then");
    assert.sameValue(
      this,
      value,
      "the getter receives the resolution, not the prototype, as its receiver"
    );
    return function(resolve) {
      actual.push("call then");
      resolve("from the inherited getter");
    };
  },
};

value = Object.create(proto);

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for a deferred inherited \"then\" getter"
      );
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      "from the inherited getter",
      "promise is fulfilled with the value passed to the resolving function"
    );
  });

  return Promise.all([ruler, settled]);
});

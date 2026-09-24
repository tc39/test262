// Copyright (C) 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-has-property-which-could-run-user-code
description: SafePromiseResolve fulfills synchronously if there is an own non-callable "then", even if there is a Proxy on the prototype chain.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy, Reflect, rest-parameters]
---*/

var expected = [
  "start",
  "tick 1",

  "settled",

  "tick 2",
];

var actual = [];

var proto = new Proxy({}, new Proxy({}, {
  get: function(_, trap) {
    return function(...args) {
      actual.push(trap === "get" ? "get:" + String(args[1]) : trap);
      return Reflect[trap](...args);
    };
  },
}));

var value = Object.create(proto, {
  then: { value: 42 },
});

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a shadowed Proxy prototype");
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(settledValue, value, "promise is fulfilled with the resolution itself");
  });

  return Promise.all([ruler, settled]);
});

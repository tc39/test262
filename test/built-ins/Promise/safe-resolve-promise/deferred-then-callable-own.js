// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve defers the call to an own callable "then" data property.
info: |
    RequiresDeferredPromiseResolution ( value )

    3. Let _thenValue_ be ! _value_.[[Get]](*"then"*).
    4. If IsCallable(_thenValue_) is *true*, return *true*.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // SafePromiseResolve returns without calling "then".
  "start",

  "tick 1",

  // The deferred job calls "then".
  "call then",

  "tick 2",
  "settled",
];

var actual = [];

var value = {
  then: function(resolve) {
    actual.push("call then");
    resolve("from then");
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a deferred callable \"then\"");
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      "from then",
      "promise is fulfilled with the value passed to the resolving function"
    );
  });

  return Promise.all([ruler, settled]);
});

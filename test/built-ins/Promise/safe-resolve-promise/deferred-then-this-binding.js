// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: >
    The deferred "then" call receives the resolution as its this value and two
    distinct fresh resolving functions.
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var observed;
var value = {
  then: function(resolve, reject) {
    observed = {
      thisValue: this,
      argCount: arguments.length,
      resolve: resolve,
      reject: reject,
    };
    resolve("done");
  },
};

asyncTest(function() {
  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability, value);

  return capability.promise.then(function(settledValue) {
    assert.sameValue(settledValue, "done", "promise is fulfilled with the resolved value");

    assert.sameValue(
      observed.thisValue,
      value,
      "\"then\" is called with the thenable as its this value"
    );
    assert.sameValue(observed.argCount, 2, "\"then\" is called with exactly two arguments");
    assert.sameValue(typeof observed.resolve, "function", "the first argument is a function");
    assert.sameValue(typeof observed.reject, "function", "the second argument is a function");
    assert.notSameValue(
      observed.resolve,
      observed.reject,
      "the resolving functions are distinct"
    );
  });
});

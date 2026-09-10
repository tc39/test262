// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: >
    A deferred "then" rejects the promise by calling the second resolving
    function it is passed.
info: |
    PerformPromiseResolveThenable ( promiseToResolve, thenable, then )

    1. Let _resolvingFunctions_ be CreateResolvingFunctions(_promiseToResolve_).
    2. If _then_ is a function object, then
      a. Let _thenCallResult_ be Completion(Call(_then_, _thenable_,
         « _resolvingFunctions_.[[Resolve]],
         _resolvingFunctions_.[[Reject]] »)).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // "then" has not been called, so the promise cannot have been rejected yet.
  "start",

  "tick 1",

  // The deferred job calls "then", which rejects through its second argument.
  "call then",

  "tick 2",
  "rejected",
];

var actual = [];

var sentinel = new Error("passed to the reject function");
var value = {
  then: function(_resolve, reject) {
    actual.push("call then");
    reject(sentinel);
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a rejecting deferred \"then\"");
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  var settled = capability.promise.then(
    function() {
      throw new Test262Error("the promise must not be fulfilled");
    },
    function(reason) {
      actual.push("rejected");
      assert.sameValue(
        reason,
        sentinel,
        "the promise is rejected with the value passed to the reject function"
      );
    }
  );

  return Promise.all([ruler, settled]);
});

// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: >
    A "then" method that throws when called rejects the promise from the
    deferred job, without SafePromiseResolve throwing.
info: |
    PerformPromiseResolveThenable ( promiseToResolve, thenable, then )

    2. If _then_ is a function object, then
      a. Let _thenCallResult_ be Completion(Call(_then_, _thenable_,
         « _resolvingFunctions_.[[Resolve]],
         _resolvingFunctions_.[[Reject]] »)).
    ...
    4. If _thenCallResult_ is an abrupt completion, then
      a. Return ! Call(_resolvingFunctions_.[[Reject]], *undefined*,
         « _thenCallResult_.[[Value]] »).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // "then" has not been called, so nothing can have thrown yet.
  "start",

  "tick 1",

  // The deferred job calls "then", which throws.
  "call then",

  "tick 2",
  "rejected",
];

var actual = [];

var sentinel = new Error("thrown by \"then\"");
var value = {
  then: function() {
    actual.push("call then");
    throw sentinel;
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a throwing \"then\" call");
    });

  var capability = Promise.withResolvers();

  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  var settled = capability.promise.then(
    function() {
      actual.push("fulfilled");
    },
    function(reason) {
      actual.push("rejected");
      assert.sameValue(reason, sentinel, "the promise is rejected with the thrown value");
    }
  );

  return Promise.all([ruler, settled]);
});

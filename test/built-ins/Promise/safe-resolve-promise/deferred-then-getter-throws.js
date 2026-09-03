// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    A throwing "then" getter rejects the promise from the deferred job, without
    SafePromiseResolve throwing.
info: |
    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    4. Let _then_ be Completion(Get(_resolution_, *"then"*)).
    5. If _then_ is an abrupt completion, then
      a. Perform RejectPromise(_promise_, _then_.[[Value]]).
      b. Return ~unused~.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // The getter has not run, so nothing can have thrown yet.
  "start",

  "tick 1",

  // The deferred job reads "then", and the getter throws.
  "get then",

  "tick 2",
  "rejected",
];

var actual = [];

var sentinel = new Error("thrown by the \"then\" getter");
var value = {
  get then() {
    actual.push("get then");
    throw sentinel;
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a throwing \"then\" getter");
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

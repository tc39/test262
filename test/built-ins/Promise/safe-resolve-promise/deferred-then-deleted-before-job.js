// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    Deleting the callable "then" after SafePromiseResolve returns, but before
    the deferred job runs, fulfills the promise with the resolution itself.
info: |
    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    4. Let _then_ be Completion(Get(_resolution_, *"then"*)).
    ...
    8. If IsCallable(_thenAction_) is *false*, then
      a. Perform FulfillPromise(_promise_, _resolution_).
      b. Return ~unused~.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

var expected = [
  // Deferred, because "then" was callable at the time of the call.
  "start",

  // Still within the deferral window, so this is observable by the job.
  "deleted then",

  "tick 1",
  "tick 2",

  // No callable "then" remains, so "call then" never appears and the promise
  // is fulfilled with the resolution itself.
  "settled",
];

var actual = [];

var value = {
  then: function(resolve) {
    actual.push("call then");
    resolve("must not be observed");
  },
};

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(
        actual,
        expected,
        "Ticks for a \"then\" deleted during the deferral window"
      );
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  delete value.then;
  actual.push("deleted then");

  var settled = capability.promise.then(
    function(settledValue) {
      actual.push("settled");
      assert.sameValue(
        settledValue,
        value,
        "promise is fulfilled with the resolution itself, as for any non-thenable"
      );
    },
    function() {
      actual.push("rejected");
    }
  );

  return Promise.all([ruler, settled]);
});

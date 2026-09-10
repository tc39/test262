// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    A Proxy "get" trap returning a callable "then" is invoked from the deferred
    job, not from SafePromiseResolve itself.
info: |
    SafePromiseResolve ( promiseCapability, resolution )

    3. Let _deferredSteps_ be a new Abstract Closure that captures _promise_ and
       _resolution_ and performs the following steps when called:
      a. Perform ? PerformPromiseResolution(_promise_, _resolution_, ~deferred~).

    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    4. Let _then_ be Completion(Get(_resolution_, *"then"*)).
    ...
    9. If _thenCallTiming_ is ~deferred~, then
      a. Perform ! PerformPromiseResolveThenable(_promise_, _resolution_,
         _thenAction_).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy]
---*/

var expected = [
  // Being a Proxy forces deferral before any trap can run.
  "start",

  "tick 1",

  // The deferred job reads "then" once and calls what the trap returned.
  "get:then",
  "call then",

  "tick 2",
  "settled",
];

var actual = [];

// "then" is the only property read from the resolution, so any other lookup
// shows up in the comparison below as an unexpected entry.
var value = new Proxy({}, {
  get: function(target, key) {
    actual.push("get:" + String(key));
    if (key !== "then") {
      return undefined;
    }
    return function(resolve) {
      actual.push("call then");
      resolve("from the trap");
    };
  },
});

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a Proxy \"get\" trap");
    });

  var capability = Promise.withResolvers();
  $262.safeResolvePromise(capability.promise, value);
  actual.push("start");

  var settled = capability.promise.then(function(settledValue) {
    actual.push("settled");
    assert.sameValue(
      settledValue,
      "from the trap",
      "promise is fulfilled with the value passed to the resolving function"
    );
  });

  return Promise.all([ruler, settled]);
});

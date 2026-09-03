// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    Resolving with a revoked Proxy rejects the promise from the deferred job,
    without SafePromiseResolve throwing.
info: |
    PropertyAccessCouldRunUserCode ( o, propertyKey, kind )

    2. If _o_ has the [[GetPrototypeOf]] and [[GetOwnProperty]] internal methods
       as defined in Proxy Object Internal Methods and Internal Slots, return
       *true*.

    PerformPromiseResolution ( promise, resolution, thenCallTiming )

    4. Let _then_ be Completion(Get(_resolution_, *"then"*)).
    5. If _then_ is an abrupt completion, then
      a. Perform RejectPromise(_promise_, _then_.[[Value]]).
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers, Proxy]
---*/

var expected = [
  // No lookup is attempted, so the revoked Proxy cannot throw here.
  "start",

  "tick 1",
  "tick 2",

  // The lookup in the deferred job throws, rejecting the promise.
  "rejected",
];

var actual = [];

var revocable = Proxy.revocable({}, {});
revocable.revoke();

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a revoked Proxy");
    });

  var capability = Promise.withResolvers();

  $262.safeResolvePromise(capability.promise, revocable.proxy);
  actual.push("start");

  var settled = capability.promise.then(
    function() {
      actual.push("fulfilled");
    },
    function(reason) {
      actual.push("rejected");
      assert.sameValue(
        reason instanceof TypeError,
        true,
        "the promise is rejected with the TypeError thrown by the revoked Proxy"
      );
    }
  );

  return Promise.all([ruler, settled]);
});

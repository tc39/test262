// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-safe-promise-resolve
description: >
    SafePromiseResolve is a no-op on a promise which is still pending because an
    ordinary resolution has already spent its resolving functions.
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// Both branches of SafePromiseResolve end in a call to
// promiseCapability.[[Resolve]]: step 1.a for a resolution needing no deferral,
// and step 7 for the null-prototype wrapper otherwise. A resolution which is
// not thenable therefore exercises the synchronous branch and a thenable one
// the deferred branch; the spent resolving function must ignore both.
function checkIgnoredResolution(label, makeResolution) {
  var capability = Promise.withResolvers();
  var ready = Promise.withResolvers();
  var outcome = {};
  var settle;

  // An ordinary resolution with a thenable which has not settled yet: the
  // promise stays pending, but its resolving functions are already spent.
  capability.resolve({
    then: function(resolve) {
      settle = resolve;
      ready.resolve();
    },
  });

  $262.safeResolvePromise(capability, makeResolution());

  var checked = capability.promise.then(
    function(value) {
      assert.sameValue(
        value,
        outcome,
        "the first thenable still supplies the value: " + label
      );
    },
    function(reason) {
      throw new Test262Error(
        "the promise must not be rejected (" + label + "): " + reason
      );
    }
  );

  var settlement = ready.promise.then(function() {
    // The first thenable's own resolving function is a fresh pair, so it is
    // unaffected by the ignored call.
    settle(outcome);
  });

  return Promise.all([checked, settlement]);
}

asyncTest(function() {
  var thenCallCount = 0;

  return Promise.all([
    checkIgnoredResolution("non-thenable", function() {
      return "must be ignored";
    }),

    checkIgnoredResolution("thenable", function() {
      return {
        then: function(resolve) {
          thenCallCount += 1;
          resolve("must also be ignored");
        },
      };
    }),
  ]).then(function() {
    assert.sameValue(
      thenCallCount,
      0,
      "the ignored resolution's \"then\" is never called"
    );
  });
});

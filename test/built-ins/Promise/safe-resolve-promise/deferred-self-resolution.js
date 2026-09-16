// Copyright (C) 2026 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolution
description: >
    Resolving a promise with itself through SafePromiseResolve rejects it with a
    TypeError from the deferred job.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

// SafePromiseResolve does not special-case a resolution which is the promise
// itself: the promise inherits a callable "then" from Promise.prototype, so
// RequiresDeferredPromiseResolution reports true and resolution is deferred like
// any other thenable. The self-resolution check then runs in the deferred job.
// See sync-self-resolution.js for the same error reported synchronously, which
// is what happens when the promise does not look thenable.
var expected = [
  // No check has run yet, so SafePromiseResolve reports nothing.
  "start",

  "tick 1",
  "tick 2",

  // The deferred job finds SameValue(resolution, promise) and rejects.
  "rejected",
];

var actual = [];

asyncTest(function() {
  var ruler = Promise.resolve(0)
    .then(() => actual.push("tick 1"))
    .then(() => actual.push("tick 2"))
    .then(() => {
      assert.compareArray(actual, expected, "Ticks for a deferred self resolution");
    });

  var capability = Promise.withResolvers();

  // SafePromiseResolve must not throw.
  $262.safeResolvePromise(capability, capability.promise);
  actual.push("start");

  var settled = capability.promise.then(
    function(settledValue) {
      throw new Test262Error("the promise must not be fulfilled: " + settledValue);
    },
    function(reason) {
      actual.push("rejected");
      assert.sameValue(
        reason instanceof TypeError,
        true,
        "the promise is rejected with a TypeError"
      );
    }
  );

  return Promise.all([ruler, settled]);
});

// Copyright (C) 2026 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-perform-promise-resolve-thenable
description: Resolving a deferred thenable with a pending promise locks its state.
includes: [asyncHelpers.js]
flags: [async]
features: [thenable-curtailment, safeResolvePromise, promise-with-resolvers]
---*/

asyncTest(function() {
  var checks = [];

  ["reject", "throw"].forEach(function(action) {
    var inner = Promise.withResolvers();
    var capability = Promise.withResolvers();
    var thenCallCount = 0;

    $262.safeResolvePromise(capability, {
      then: function(resolve, reject) {
        thenCallCount += 1;
        resolve(inner.promise);

        // Keep the inner promise pending until after the reject or throw.
        Promise.resolve(0).then(function() {
          inner.resolve("from the inner promise");
        });

        if (action === "reject") {
          reject(new Error("must be ignored"));
        } else {
          throw new Error("must be ignored");
        }
      },
    });

    checks.push(capability.promise.then(function(settledValue) {
      assert.sameValue(
        settledValue,
        "from the inner promise",
        "the pending resolution wins over a later " + action
      );
      assert.sameValue(thenCallCount, 1, "the deferred then runs exactly once");
    }));
  });

  return Promise.all(checks);
});

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Rejecting through deferred invocation of the provided resolving function
esid: sec-promise-anysettled
info: |
    [...]
    6. Let promiseCapability be NewPromiseCapability(C).
    [...]
    11. Let result be PerformPromiseAnySettled(iteratorRecord, promiseCapability, C).
    [...]

    25.4.4.3.1 Runtime Semantics: PerformPromiseAnySettled
    1. Repeat
       [...]
       j. Let result be Invoke(nextPromise, "then",
          «promiseCapability.[[Resolve]], promiseCapability.[[Reject]]»).

    25.4.1.3.1 Promise Reject Functions
    [...]
    6. Return RejectPromise(promise, reason).
flags: [async]
features: [Promise.anySettled]
---*/

var thenable = {
  then: function(_, reject) {
    new Promise(function(resolve) {
        resolve();
      })
      .then(function() {
        reject();
      });
  }
};

Promise.anySettled([thenable])
  .then(function() {
    $DONE('The promise should not be fulfilled.');
  }, function() {
    $DONE();
  });

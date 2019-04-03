// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Rejecting through immediate invocation of the provided resolving function
esid: sec-promise.allsettled
info: |
  6. Let result be PerformPromiseAllSettled(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAllSettled
  
  6. Repeat
    ...
    z. Perform ? Invoke(nextPromise, "then", « resolveElement, rejectElement »).
flags: [async]
---*/

var simulation = {};
var thenable = {
  then(_, reject) {
    reject({});
  }
};

Promise.allSettled([thenable])
  .then((settleds) => {
    assert.sameValue(settleds.length, 1);
    assert.sameValue(settleds[0].status, 'rejected');
    assert.sameValue(settleds[0].reason, simulation);
    $DONE();
  }).then($DONE, $DONE);
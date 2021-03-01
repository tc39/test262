// Copyright (C) 2020 Rick Waldron, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Resolved promises ignore rejections through immediate invocation of the
    provided resolving function
esid: sec-promise-anysettled
info: |
  Let result be PerformPromiseAnySettled(iteratorRecord, C, promiseCapability, promiseResolve).

  PerformPromiseAnySettled

  Repeat
    ...
    Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], resultCapability.[[Reject]] »).

flags: [async]
features: [arrow-function, Promise.anySettled]
---*/

let resolver = {
  then(resolve) {
    resolve(42);
  }
};
let lateRejector = {
  then(resolve, reject) {
    resolve(33);
    reject();
  }
};

Promise.anySettled([resolver, lateRejector])
  .then(resolution => {
    assert.sameValue(resolution, 42);
  }).then($DONE, $DONE);

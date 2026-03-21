// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettledkeyed
description: >
  Promise.allSettledKeyed rejects when the promises argument is a BigInt
info: |
  Promise.allSettledKeyed ( promises )

  ...
  5. If promises is not an Object, then
    a. Let error be a newly created TypeError object.
    b. Perform ? Call(promiseCapability.[[Reject]], undefined, « error »).
    c. Return promiseCapability.[[Promise]].
flags: [async]
features: [await-dictionary, BigInt]
---*/

Promise.allSettledKeyed(0n).then(function() {
  throw new Test262Error('The promise should be rejected for BigInt');
}, function(error) {
  assert(error instanceof TypeError, 'rejects with TypeError for BigInt');
}).then($DONE, $DONE);

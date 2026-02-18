// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.allsettledkeyed
description: >
  Promise.allSettledKeyed rejects when the promises argument is not an Object
info: |
  Promise.allSettledKeyed ( promises )

  ...
  5. If promises is not an Object, then
    a. Let error be a newly created TypeError object.
    b. Perform ? Call(promiseCapability.[[Reject]], undefined, « error »).
    c. Return promiseCapability.[[Promise]].
flags: [async]
features: [await-dictionary, Symbol]
---*/

function checkRejects(value) {
  return Promise.allSettledKeyed(value).then(function() {
    throw new Test262Error('The promise should be rejected for ' + typeof value);
  }, function(error) {
    assert(error instanceof TypeError, 'rejects with TypeError for ' + typeof value);
  });
}

checkRejects(undefined)
  .then(function() { return checkRejects(null); })
  .then(function() { return checkRejects(86); })
  .then(function() { return checkRejects('string'); })
  .then(function() { return checkRejects(true); })
  .then(function() { return checkRejects(Symbol()); })
  .then($DONE, $DONE);

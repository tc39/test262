// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Promise.anySettled must throw TypeError per
    CreatePromiseCapabilityRecord step 8 when
    promiseCapabliity.[[Resolve]] is not callable
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled throws TypeError, even on empty array, when 'this' does not conform to Promise constructor
features: [Promise.anySettled]
---*/

function BadPromiseConstructor(f) {
  f(undefined, undefined);
}

assert.throws(TypeError, function() {
  Promise.anySettled.call(BadPromiseConstructor, []);
});

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Returns abrupt when callback call is abrupt, does not close iterator.
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/

let iterator = new Test262Iterator([1, 2]);
let callbackCount = 0;

assert.throws(Test262Error, function() {
  iterator.every(() => {
    callbackCount++;
    throw new Test262Error();
  });
});

assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

let {value, done} = iterator.next();
assert.sameValue(value, 2, 'The value of `value` is 2');
assert.sameValue(done, false, 'The value of `done` is false');

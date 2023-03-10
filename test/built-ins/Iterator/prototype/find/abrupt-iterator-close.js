// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Returns abrupt when callback call is abrupt. Closes iterator
info: |
  %Iterator.prototype%.find ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/

let callbackCount = 0;
let iterator = new Test262Iterator([1, 2]);

assert.throws(Test262Error, function () {
  iterator.find(() => {
    callbackCount++;
    throw new Test262Error();
  });
});

assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.drop
description: >
  Throws a RangeError exception when limit argument is less than 0.
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
---*/

let iterator = new Test262Iterator([1, 2]);

iterator.drop(0);
iterator.drop(null);

assert.throws(RangeError, () => {
  iterator.drop(-1);
}, '`iterator.drop(-1)` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.drop();
}, '`iterator.drop()` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.drop(void 0);
}, '`iterator.drop(undefined)` throws a RangeError exception');

assert.throws(RangeError, () => {
  iterator.drop(0/0);
}, '`iterator.drop(NaN)` throws a RangeError exception');

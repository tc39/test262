// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Throws a RangeError exception when limit argument is less than 0.
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let iterated be ? GetIteratorDirect(this value).
  Let remaining be ? ToInteger(limit).
  If remaining < 0, throw a RangeError exception.
  ...

includes: [iterators.js]
features: [iterator-helpers]
---*/

let count = 0;
let iterator = new Test262AsyncIterator([1, 2]);

assert.throws(RangeError, () => {
  count++;
  iterator.drop(-1);
}, '`count++; iterator.drop(-1)` throws a RangeError exception');

assert.sameValue(count, 1, 'The value of `count` is 1');

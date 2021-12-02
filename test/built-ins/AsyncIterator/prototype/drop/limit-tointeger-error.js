// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Coerces limit argument to an integer
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let remaining be ? ToInteger(limit).

includes: [iterators.js]
features: [iterator-helpers]
---*/

let count = 0;
let iterator = new Test262AsyncIterator([1, 2, 3, 4]);
assert.throws(Test262Error, () => {
  count++;
  let limit = {
    valueOf() {
      count++;
      throw new Test262Error();
    }
  };
  iterator.drop(limit);
}, '`count++; let limit = {valueOf() {count++; throw new Test262Error();}}; iterator.drop(limit)` throws Test262Error');

assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
assert.sameValue(count, 2, 'The value of `count` is 2');

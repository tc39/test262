// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Coerces limit argument to an integer
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let iterated be ? GetIteratorDirect(this value).
  Let remaining be ? ToInteger(limit).
  ...

includes: [iterators.js]
features: [iterator-helpers]
---*/

let assertThrowsCount = 0;
let iterator = new Test262AsyncIterator([1, 2]);
assert.throws(Test262Error, () => {
  assertThrowsCount++;
  let limit = {
    valueOf() {
      assertThrowsCount++;
      throw new Test262Error();
    }
  };
  iterator.drop(limit);
}, '`assertThrowsCount++; let limit = {valueOf() {assertThrowsCount++; throw new Test262Error();}}; iterator.drop(limit)` throws a Test262Error exception');
assert.sameValue(assertThrowsCount, 2, 'The value of `assertThrowsCount` is 2');

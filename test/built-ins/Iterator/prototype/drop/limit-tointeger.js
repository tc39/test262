// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.drop
description: >
  Coerces limit argument to an integer
info: |
  %Iterator.prototype%.drop ( limit )

  Let iterated be ? GetIteratorDirect(this value).
  Let remaining be ? ToInteger(limit).
  ...

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/

let valueOfCount = 0;
let iterator = new Test262Iterator([1, 2]);
let limit = {
  valueOf() {
    valueOfCount++;
    return 1;
  }
};

let {value, done} = iterator.drop(limit).next();

assert.sameValue(value, 2, 'The value of `value` is 2');
assert.sameValue(done, false, 'The value of `done` is false');
assert.sameValue(valueOfCount, 1, 'The value of `valueOfCount` is 1');

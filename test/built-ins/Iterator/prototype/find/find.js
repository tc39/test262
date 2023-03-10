// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find returns only items for which the predicate returned true.
info: |
  %Iterator.prototype%.find ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([1, 0, 2, 0, 3, 0, 4]);
let found = iterator.find(value => value % 2);

let {
  value,
  done
} = iterator.next();

assert.sameValue(found, 1, 'The value of `found` is 1');
assert.sameValue(value, 0, 'The value of `value` is 0');
assert.sameValue(done, false, 'The value of `done` is false');

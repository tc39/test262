// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter returns only items for which the predicate returned true.
info: |
  %Iterator.prototype%.filter ( filterer )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([1, 0, 2, 0, 3, 0, 4]).filter(value => !!value);
let check = 0;

for (let value of iterator) {
  check++;
  assert.sameValue(value, check, 'The value of `value` is expected to equal the value of check');
}

assert.sameValue(check, 4);

let {
  value,
  done
} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');

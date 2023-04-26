// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find returns the first item for which the predicate returned truthy.
info: |
  %Iterator.prototype%.find ( fn )

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

let iterator = g();
let found = iterator.find(value => value === 2);

assert.sameValue(found, 2, 'The value of `found` is 2');

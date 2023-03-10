// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Returns abrupt when next accessor is abrupt.
info: |
  %Iterator.prototype%.find ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextGets = 0;
class Test262IteratorThrows extends Test262Iterator {
  get next() {
    nextGets++;
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]);
assert.sameValue(nextGets, 0, 'The value of `nextGets` is 0');

assert.throws(Test262Error, function () {
  iterator.find(x => false);
});

assert.sameValue(nextGets, 1, 'The value of `nextGets` is 1');

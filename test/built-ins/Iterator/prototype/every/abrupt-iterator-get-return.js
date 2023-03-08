// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Returns abrupt when return accessor is abrupt.
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let returnGets = 0;
class Test262IteratorThrows extends Test262Iterator {
  get return() {
    returnGets++;
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]);
assert.sameValue(returnGets, 0, 'The value of `returnGets` is 0');

assert.throws(Test262Error, function() {
  iterator.every(() => false);
});
assert.sameValue(returnGets, 1, 'The value of `returnGets` is 1');

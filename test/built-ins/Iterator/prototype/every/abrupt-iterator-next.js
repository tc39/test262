// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Returns abrupt when next call is abrupt.
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextCalls = 0;
class Test262IteratorThrows extends Test262Iterator {
   next() {
    nextCalls++;
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(Test262Error, function() {
  iterator.every(() => true);
});
assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Returns abrupt when value accessor is abrupt.
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextCalls = 0;

class Test262IteratorCounter extends Test262Iterator {
   next() {
    nextCalls++;
    return null;
  }
}

let iterator = new Test262IteratorCounter([1, 2]);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(TypeError, function() {
  for (const [i, v] of iterator.drop(1)) {
    throw new Test262Error('for body must not be reachable');
  }
});

assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');

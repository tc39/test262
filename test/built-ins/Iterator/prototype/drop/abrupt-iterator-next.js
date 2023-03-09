// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Returns abrupt when next call is abrupt.
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextCalls = 0;

class Test262IteratorAbrupt extends Test262Iterator {
  next() {
    nextCalls++;
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorAbrupt([1, 2]).drop(0);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(Test262Error, function () {
  for (const [i, v] of iterator) {
    throw new Error('for body must not be reachable');
  }
});

let {
  value,
  done
} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');

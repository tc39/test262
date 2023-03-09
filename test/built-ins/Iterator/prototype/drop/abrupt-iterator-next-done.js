// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Returns abrupt when done accessor is abrupt.
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let doneCount = 0;
let nextCalls = 0;

class Test262IteratorThrows extends Test262Iterator {
  next() {
    nextCalls++;

    return {
      get done() {
        doneCount++;

        if (nextCalls === 2) {
          throw new Test262Error();
        } else {
          return false;
        }
      },

      value: 1
    };
  }
}

let iterator = new Test262IteratorThrows([1, 2]).drop(1);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(Test262Error, function () {
  for (const value of iterator) {
    throw new Error('for body must not be reachable');
  }
});

assert.sameValue(doneCount, 2, 'The value of `doneCount` is 2');
assert.sameValue(nextCalls, 2, 'The value of `nextCalls` is 2');

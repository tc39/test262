// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Returns abrupt when done accessor is abrupt.
info: |
  %Iterator.prototype%.filter ( filterer )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let doneGets = 0;
let nextCalls = 0;
class Test262IteratorThrows extends Test262Iterator {
  next() {
    nextCalls++;
    return {
      get done() {
        doneGets++;
        throw new Test262Error();
      },

      value: 1
    };
  }
}

let iterator = (new Test262IteratorThrows([1, 2])).filter(() => true);
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(doneGets, 1, 'The value of `doneGets` is 1');
assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');

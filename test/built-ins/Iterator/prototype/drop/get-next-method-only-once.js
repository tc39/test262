// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Gets the next method from the underlying iterator only once
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextGets = 0;
let nextCalls = 0;

class CountingIterator extends Iterator {
  get next() {
    nextGets++;
    let iter = function* () {
      for (let i = 1; i < 5; ++i) {
        yield i;
      }
    }();
    return function () {
      nextCalls++;
      return iter.next();
    };
  }
}

let iterator = new CountingIterator;

assert.sameValue(nextGets, 0, 'The value of `nextGets` is 0');
assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

for (const value of iterator.drop(2));

assert.sameValue(nextGets, 1, 'The value of `nextGets` is 1');
assert.sameValue(nextCalls, 5, 'The value of `nextCalls` is 5');

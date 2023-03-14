// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Gets the next method from the iterator only once
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nextGets = 0;

class TestIterator extends Test262Iterator {
  get next() {
    nextGets++;
    let counter = 5;
    return function() {
      if (counter < 0) {
        return { done: true, value: undefined };
      } else {
        return { done: false, value: --counter };
      }
    };
  }
}

let iterator = new TestIterator;

assert.sameValue(nextGets, 0, 'The value of `nextGets` is 0');
assert.sameValue(iterator.every(() => true), true);
assert.sameValue(nextGets, 1, 'The value of `nextGets` is 1');

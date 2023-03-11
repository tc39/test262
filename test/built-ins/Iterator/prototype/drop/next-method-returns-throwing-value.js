// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator next returns object with throwing done getter
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() { throw new Test262Error; }
    };
  }
  return() {
    throw new Error;
  }
}

let iterator = new ThrowingIterator().drop(0);

assert.throws(Test262Error, function () {
  iterator.next();
});

iterator = new ThrowingIterator().drop(1);

assert.throws(Test262Error, function () {
  iterator.next();
});

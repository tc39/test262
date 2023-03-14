// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator return is throwing getter
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let returnCount = 0;

class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  get return() {
    throw new Test262Error;
  }
}

let iterator = new TestIterator().drop(1);
iterator.next();

assert.throws(Test262Error, function() {
  iterator.return();
});

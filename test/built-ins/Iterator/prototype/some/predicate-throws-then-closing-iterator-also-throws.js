// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.some
description: >
  Attempts to close iterator when predicate throws, but that throws
info: |
  %Iterator.prototype%.some ( predicate )

features: [iterator-helpers]
flags: []
---*/
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  return() {
    throw new Error;
  }
}

let iterator = new TestIterator;

assert.throws(Test262Error, function() {
  iterator.some(() => {
    throw new Test262Error;
  });
});

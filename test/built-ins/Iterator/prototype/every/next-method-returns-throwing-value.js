// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  %Iterator.prototype%.every ( predicate )

  4.c. Let value be ? IteratorValue(next).

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new Test262Error();
      },
    };
  }
  return() {
    returnMethodCalled = true;
    throw new Error();
  }
}

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  iterator.every(() => {});
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

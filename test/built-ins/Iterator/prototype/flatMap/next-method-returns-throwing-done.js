// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator next returns object with throwing done getter
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;
class ThrowingIterator extends Iterator {
  next() {
    return {
      get done() {
        throw new Test262Error();
      },
      value: 1,
    };
  }
  return() {
    returnMethodCalled = true;
    throw new Error();
  }
}

let iterator = new ThrowingIterator().flatMap(x => [x]);

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

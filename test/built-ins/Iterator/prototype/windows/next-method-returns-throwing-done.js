// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.windows
description: >
  Underlying iterator next returns object with throwing done getter
info: |
  Iterator.prototype.windows ( windowSize [ , undersized ] )

features: [iterator-chunking, class]
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
  get return() {
    returnMethodCalled = true;
    throw new Test262Error();
  }
}

let iterator = new ThrowingIterator().windows(1);

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

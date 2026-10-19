// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.chunks
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  Iterator.prototype.chunks ( chunkSize )

features: [iterator-chunking, class]
---*/

var returnMethodCalled = false;
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new Test262Error();
      }
    };
  }
  get return() {
    returnMethodCalled = true;
    throw new TypeError();
  }
}

let iterator = new ThrowingIterator().chunks(1);

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

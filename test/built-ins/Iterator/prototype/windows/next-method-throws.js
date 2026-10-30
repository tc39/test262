// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.windows
description: >
  Underlying iterator next throws
info: |
  Iterator.prototype.windows ( windowSize [ , undersized ] )

features: [iterator-chunking, class]
---*/

var returnMethodCalled = false;
class ThrowingIterator extends Iterator {
  next() {
    throw new Test262Error();
  }
  get return() {
    returnMethodCalled = true;
    throw new TypeError();
  }
}

let iterator = new ThrowingIterator().windows(1);

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method throws");

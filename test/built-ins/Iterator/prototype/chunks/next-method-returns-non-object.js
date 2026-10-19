// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.chunks
description: >
  Underlying iterator next returns non-object
info: |
  Iterator.prototype.chunks ( chunkSize )

features: [iterator-chunking, class]
---*/

var returnMethodCalled = false;
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
  get return() {
    returnMethodCalled = true;
    throw new Test262Error();
  }
}

let iterator = new NonObjectIterator().chunks(1);

assert.throws(TypeError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns a non-object");

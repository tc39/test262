// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.take ( limit )

  8.b.iii. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;

class ReturnCalledError extends Error {}

class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
  get return() {
    returnMethodCalled = true;
    throw new ReturnCalledError();
  }
}

let iterator = new NonObjectIterator().take(0);

assert.throws(ReturnCalledError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, true, "take(0) closes the underlying iterator");

returnMethodCalled = false;
iterator = new NonObjectIterator().take(1);

assert.throws(TypeError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns a non-object");

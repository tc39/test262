// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.drop ( limit )

  6.b.ii. Let next be ? IteratorStep(iterated).

  6.c.i. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
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

let iterator = new NonObjectIterator().drop(0);

assert.throws(TypeError, function () {
  iterator.next();
});

iterator = new NonObjectIterator().drop(2);

assert.throws(TypeError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns a non-object");

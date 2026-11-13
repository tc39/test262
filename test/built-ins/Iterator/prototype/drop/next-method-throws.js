// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.drop ( limit )

  6.b.ii. Let next be ? IteratorStep(iterated).

  6.c.i. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
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

let iterator = new ThrowingIterator().drop(0);

assert.throws(Test262Error, function () {
  iterator.next();
});

iterator = new ThrowingIterator().drop(1);

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method throws");

// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator next returns object with throwing done getter
info: |
  %Iterator.prototype%.take ( limit )

  8.b.iii. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;

class ReturnCalledError extends Error {}
class DoneGetterError extends Error {}

class ThrowingIterator extends Iterator {
  next() {
    return {
      get done() {
        throw new DoneGetterError();
      },
      value: 1,
    };
  }
  return() {
    returnMethodCalled = true;
    throw new ReturnCalledError();
  }
}

let iterator = new ThrowingIterator().take(0);

assert.throws(ReturnCalledError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, true, "take(0) closes the underlying iterator");

returnMethodCalled = false;
iterator = new ThrowingIterator().take(1);

assert.throws(DoneGetterError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

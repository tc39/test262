// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  %Iterator.prototype%.take ( limit )

  8.b.v. Let completion be Completion(Yield(? IteratorValue(next))).

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;

class ReturnCalledError extends Error {}
class ValueGetterError extends Error {}

class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new ValueGetterError();
      },
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

assert.throws(ValueGetterError, function () {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");

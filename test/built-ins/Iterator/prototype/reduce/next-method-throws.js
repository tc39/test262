// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.reduce
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.reduce ( reducer )

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

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  iterator.reduce(() => {});
});

assert.throws(Test262Error, function () {
  iterator.reduce(() => {}, 0);
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method throws");

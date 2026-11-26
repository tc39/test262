// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  Underlying iterator has throwing next getter
info: |
  Iterator.from ( O )

  4. Let iterated be ? GetIteratorDirect(O).

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;
class ThrowingIterator {
  get next() {
    throw new Test262Error();
  }
  get return() {
    returnMethodCalled = true;
    throw new TypeError();
  }
}

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  Iterator.from(iterator);
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when getting its next method throws");

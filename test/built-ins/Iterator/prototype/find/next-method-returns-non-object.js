// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.find ( predicate )

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

let iterator = new NonObjectIterator();

assert.throws(TypeError, function () {
  iterator.find(() => {});
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns a non-object");

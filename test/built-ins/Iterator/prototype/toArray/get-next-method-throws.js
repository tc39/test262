// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.toArray
description: >
  Iterator has throwing next getter
info: |
  %Iterator.prototype%.toArray ( )

features: [iterator-helpers]
flags: []
---*/

var returnMethodCalled = false;
class IteratorThrows extends Iterator {
  get next() {
    throw new Test262Error();
  }
  get return() {
    returnMethodCalled = true;
    throw new TypeError();
  }
}

let iterator = new IteratorThrows();

assert.throws(Test262Error, function () {
  iterator.toArray();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when getting its next method throws");

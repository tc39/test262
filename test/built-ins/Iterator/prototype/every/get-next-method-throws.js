// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator has throwing next getter
info: |
  %Iterator.prototype%.every ( predicate )

  1. Let iterated be ? GetIteratorDirect(this value).

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
  iterator.every(() => {});
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when getting its next method throws");

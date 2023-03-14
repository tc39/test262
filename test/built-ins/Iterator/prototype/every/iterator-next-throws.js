// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator next throws
info: |
  %Iterator.prototype%.every ( predicate )

  4.a. Let next be ? IteratorStep(iterated).

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class Test262IteratorThrows extends Test262Iterator {
  next() {
    throw new Test262Error;
  }
}

let iterator = new Test262IteratorThrows([1, 2]);

assert.throws(Test262Error, function() {
  iterator.every(() => true);
});

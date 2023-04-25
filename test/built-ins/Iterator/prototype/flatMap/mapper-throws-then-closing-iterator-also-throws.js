// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Attempts to close iterator when mapper throws, but that throws
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  return() {
    throw new Error;
  }
}

let iterator = new TestIterator().flatMap(() => {
  throw new Test262Error;
});

assert.throws(Test262Error, function() {
  iterator.next();
});

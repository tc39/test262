// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Underlying iterator next returns object with throwing done getter
features: [iterator-includes]
---*/

class ThrowingIterator extends Iterator {
  next() {
    return {
      get done() {
        throw new Test262Error();
      },
      value: 1,
    };
  }
}

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function() {
  iterator.includes(0);
});

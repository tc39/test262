// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Iterator has throwing next getter
features: [iterator-includes]
---*/

class IteratorThrows extends Iterator {
  get next() {
    throw new Test262Error();
  }
}

let iterator = new IteratorThrows();

assert.throws(Test262Error, function() {
  iterator.includes(0);
});

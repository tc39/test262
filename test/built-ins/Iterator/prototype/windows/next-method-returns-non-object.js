// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.windows
description: >
  Underlying iterator next returns non-object
info: |
  Iterator.prototype.windows ( windowSize [ , undersized ] )

features: [iterator-chunking]
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().windows(1);

assert.throws(TypeError, function () {
  iterator.next();
});

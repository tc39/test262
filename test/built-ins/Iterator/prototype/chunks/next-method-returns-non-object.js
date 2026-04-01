// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.chunks
description: >
  Underlying iterator next returns non-object
info: |
  Iterator.prototype.chunks ( chunkSize )

features: [iterator-chunking]
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().chunks(1);

assert.throws(TypeError, function () {
  iterator.next();
});

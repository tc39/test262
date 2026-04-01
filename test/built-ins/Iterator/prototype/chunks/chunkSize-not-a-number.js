// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.chunks
description: >
  Iterator.prototype.chunks throws RangeError when chunkSize is not a Number
info: |
  Iterator.prototype.chunks ( chunkSize )

  4. If chunkSize is not an integral Number in the inclusive interval from 1𝔽 to 𝔽(2^32 - 1), then
    a. Let error be ThrowCompletion(a newly created RangeError object).
    b. Return ? IteratorClose(iterated, error).

features: [iterator-chunking]
---*/
let iterator = (function* () {})();

assert.throws(RangeError, () => {
  iterator.chunks();
});

assert.throws(RangeError, () => {
  iterator.chunks(undefined);
});

assert.throws(RangeError, () => {
  iterator.chunks('1');
});

assert.throws(RangeError, () => {
  iterator.chunks(true);
});

assert.throws(RangeError, () => {
  iterator.chunks(null);
});

assert.throws(RangeError, () => {
  iterator.chunks({});
});

assert.throws(RangeError, () => {
  iterator.chunks(Symbol());
});

assert.throws(RangeError, () => {
  iterator.chunks([2]);
});

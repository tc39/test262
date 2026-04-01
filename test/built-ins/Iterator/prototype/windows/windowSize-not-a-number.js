// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.windows
description: >
  Iterator.prototype.windows throws RangeError when windowSize is not a Number
info: |
  Iterator.prototype.windows ( windowSize [ , undersized ] )

  4. If windowSize is not an integral Number in the inclusive interval from 1𝔽 to 𝔽(2^32 - 1), then
    a. Let error be ThrowCompletion(a newly created RangeError object).
    b. Return ? IteratorClose(iterated, error).

features: [iterator-chunking]
---*/
let iterator = (function* () {})();

assert.throws(RangeError, () => {
  iterator.windows();
});

assert.throws(RangeError, () => {
  iterator.windows(undefined);
});

assert.throws(RangeError, () => {
  iterator.windows('1');
});

assert.throws(RangeError, () => {
  iterator.windows(true);
});

assert.throws(RangeError, () => {
  iterator.windows(null);
});

assert.throws(RangeError, () => {
  iterator.windows({});
});

assert.throws(RangeError, () => {
  iterator.windows(Symbol());
});

assert.throws(RangeError, () => {
  iterator.windows([2]);
});

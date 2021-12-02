// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator
description: >
  AsyncIterator is not callable or constructable
info: |
  When the AsyncIterator function is called, the following steps are taken:

  If NewTarget is undefined or the active function object, throw a TypeError exception.

features: [iterator-helpers]
---*/

let count = 0;

assert.throws(TypeError, () => {
  count++;
  AsyncIterator();
});

assert.throws(TypeError, () => {
  count++;
  new AsyncIterator();
});

assert.sameValue(count, 2);

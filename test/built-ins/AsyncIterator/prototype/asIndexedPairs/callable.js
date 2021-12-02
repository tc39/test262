// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  AsyncIterator.prototype.asIndexedPairs is callable, but not constructable.
features: [iterator-helpers]
---*/


AsyncIterator.prototype.asIndexedPairs.call({next() {}});

assert.throws(TypeError, () => {
  new AsyncIterator.prototype.asIndexedPairs();
}, '`new AsyncIterator.prototype.asIndexedPairs()` throws TypeError');

assert.throws(TypeError, () => {
  let instance = new AsyncIterator();
  new instance.asIndexedPairs();
}, '`let instance = new AsyncIterator(); new instance.asIndexedPairs()` throws TypeError');

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
}, '`new AsyncIterator.prototype.asIndexedPairs()` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (new (class S extends AsyncIterator {})()).asIndexedPairs();
}, '`new (new (class S extends AsyncIterator {})()).asIndexedPairs()` throws a TypeError exception');

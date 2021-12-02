// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  AsyncIterator.prototype.drop is callable, but not constructable.
features: [iterator-helpers]
---*/

AsyncIterator.prototype.drop.call({next() {}});

assert.throws(TypeError, () => {
  new AsyncIterator.prototype.drop();
}, '`new AsyncIterator.prototype.drop()` throws TypeError');

assert.throws(TypeError, () => {
  new (new AsyncIterator()).drop();
}, '`new (new AsyncIterator()).drop()` throws TypeError');

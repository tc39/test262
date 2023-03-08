// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  AsyncIterator.prototype.drop is not constructible.
features: [iterator-helpers]
---*/

assert.throws(TypeError, () => {
  new AsyncIterator.prototype.drop();
}, '`new AsyncIterator.prototype.drop()` throws a TypeError exception');

// It's ludicrous that we have to create a subclass
// in order to instantiate a new object.
assert.throws(TypeError, () => {
  new (new class extends AsyncIterator {}).drop();
}, '`new (new class extends AsyncIterator {}).drop()` throws a TypeError exception');

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every is callable, but not constructable.
features: [iterator-helpers]
---*/
async function* g() {}
AsyncIterator.prototype.every.call(g(), () => {});

assert.throws(TypeError, () => {
  new AsyncIterator.prototype.every();
}, '`new AsyncIterator.prototype.every()` throws TypeError');

assert.throws(TypeError, () => {
  new new AsyncIterator().every();
}, '`new new AsyncIterator().every()` throws TypeError');

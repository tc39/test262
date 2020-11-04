// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.drop
description: >
  AsyncIterator.prototype.drop is callable, but not constructable.
features: [iterator-helpers]
---*/
async function* g() {}
AsyncIterator.prototype.drop.call(g());
let iter = g();

iter.drop();

assert.throws(TypeError, () => {
  new iter.drop();
}, '`new iter.drop()` throws a TypeError exception');

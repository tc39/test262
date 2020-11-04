// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  AsyncIterator.prototype.filter is callable, but not constructable.
features: [iterator-helpers]
---*/
async function* g() {}
let iter = g();

AsyncIterator.prototype.filter.call(iter, () => {});
iter.filter(() => {});

assert.throws(TypeError, () => {
  new iter.filter(() => {});
}, '`new iter.filter(() => {})` throws a TypeError exception');

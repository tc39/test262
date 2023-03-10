// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter is callable, but not constructable.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();
Iterator.prototype.filter.call(iter, () => {});
iter.filter(() => {});

assert.throws(TypeError, () => {
  new iter.filter(() => {});
}, '`new iter.filter(() => {})` throws a TypeError exception');

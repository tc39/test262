// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every is callable, but not constructable.
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.every.call(g(), () => {});
let iter = g();
iter.every(() => {});

assert.throws(TypeError, () => {
  new iter.every(() => {});
}, '`new iter.every(() => {})` throws a TypeError exception');

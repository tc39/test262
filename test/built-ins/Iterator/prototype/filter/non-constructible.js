// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter is not constructible.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.filter(() => true);
}, '`new iter.filter(() => true)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.filter(() => true);
}, '`new Iterator.prototype.filter(() => true)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).filter(() => true);
}, '`new (new class extends Iterator {}).filter(() => true)` throws a TypeError exception');

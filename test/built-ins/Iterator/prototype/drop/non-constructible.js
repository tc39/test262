// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.drop
description: >
  Iterator.prototype.drop is not constructible.
features: [iterator-helpers]
---*/

function* g() {}
let iter = g();
assert.throws(TypeError, () => {
  new iter.drop(0);
}, '`new iter.drop(0)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.drop(0);
}, '`new Iterator.prototype.drop(0)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).drop(0);
}, '`new (new class extends Iterator {}).drop(0)` throws a TypeError exception');

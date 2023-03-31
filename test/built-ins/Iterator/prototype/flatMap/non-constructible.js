// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap is not constructible.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.flatMap(() => []);
}, '`new iter.flatMap(() => [])` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.flatMap(() => []);
}, '`new Iterator.prototype.flatMap(() => [])` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).flatMap(() => []);
}, '`new (new class extends Iterator {}).flatMap(() => [])` throws a TypeError exception');

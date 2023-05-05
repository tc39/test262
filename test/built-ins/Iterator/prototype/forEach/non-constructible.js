// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach is not constructible.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.forEach(() => {});
}, '`new iter.forEach(() => {})` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.forEach(() => {});
}, '`new Iterator.prototype.forEach(() => {})` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).forEach(() => {});
}, '`new (new class extends Iterator {}).forEach(() => {})` throws a TypeError exception');

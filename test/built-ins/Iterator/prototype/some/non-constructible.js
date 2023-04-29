// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some is not constructible.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.some(() => {});
}, '`new iter.some(() => {})` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.some(() => {});
}, '`new Iterator.prototype.some(() => {})` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).some(() => {});
}, '`new (new class extends Iterator {}).some(() => {})` throws a TypeError exception');

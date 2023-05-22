// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.take
description: >
  Iterator.prototype.take is not constructible.

  Built-in function objects that are not identified as constructors do not implement the [[Construct]] internal method unless otherwise specified in the description of a particular function.
features: [iterator-helpers]
---*/
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  new iter.take;
}, '`new iter.take` throws a TypeError exception');

assert.throws(TypeError, () => {
  new iter.take(0);
}, '`new iter.take(0)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new Iterator.prototype.take(0);
}, '`new Iterator.prototype.take(0)` throws a TypeError exception');

assert.throws(TypeError, () => {
  new (class extends Iterator {}).take(0);
}, '`new (new class extends Iterator {}).take(0)` throws a TypeError exception');

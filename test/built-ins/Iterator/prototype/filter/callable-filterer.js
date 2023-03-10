// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter expects to be called with a function argument.
features: [iterator-helpers]
---*/
const nonCallable = {};
function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  Iterator.prototype.filter.call(iter, nonCallable);
}, '`Iterator.prototype.filter.call(iter, nonCallable)` throws a TypeError exception');

assert.throws(TypeError, () => {
  iter.filter(nonCallable);
}, '`iter.filter(nonCallable)` throws a TypeError exception');

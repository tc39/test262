// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every expects to be called with a function argument.
features: [iterator-helpers]
---*/
const nonCallable = {};
async function* g() {}
let iter = g();

assert.throws(TypeError, () => {
  AsyncIterator.prototype.every.call(iter, nonCallable);
}, '`AsyncIterator.prototype.every.call(iter, nonCallable)` throws a TypeError exception');

assert.throws(TypeError, () => {
  iter.every(nonCallable);
}, '`iter.every(nonCallable)` throws a TypeError exception');

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find expects to be called with a function argument.
features: [iterator-helpers]
flags: []
---*/
const nonCallable = {};
function* g() {}
let iter = g();

assert.throws(TypeError, function () {
  iter.find(nonCallable);
});


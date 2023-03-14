// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every expects to be called with a callable argument.
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nonCallable = {};
let iterator = new Test262Iterator([1, 2]);

assert.throws(TypeError, function() {
  iterator.every(nonCallable);
});


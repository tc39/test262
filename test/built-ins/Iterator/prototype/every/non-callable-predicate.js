// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every expects to be called with a callable argument.
info: |
  %Iterator.prototype%.every ( predicate )

  2. If IsCallable(predicate) is false, throw a TypeError exception.

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let nonCallable = {};
let iterator = new Test262Iterator([1, 2]);

assert.throws(TypeError, function() {
  iterator.every(nonCallable);
});


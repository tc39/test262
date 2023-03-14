// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Iterator.prototype.drop throws TypeError when its this value is a non-object
info: |
  %Iterator.prototype%.drop ( limit )

  1. Let iterated be ? GetIteratorDirect(this value).

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
assert.throws(TypeError, function() {
  Iterator.prototype.drop.call(null, 1);
});

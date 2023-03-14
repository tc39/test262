// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every throws TypeError when its this value is an object with a non-callable next
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
assert.throws(TypeError, function() {
  Iterator.prototype.every.call({ next: 0 }, () => {});
});

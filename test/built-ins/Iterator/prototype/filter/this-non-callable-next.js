// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter throws TypeError when its this value is an object with a non-callable next
info: |
  %Iterator.prototype%.filter ( predicate )

  1. Let iterated be ? GetIteratorDirect(this value).

includes: []
features: [iterator-helpers]
flags: []
---*/
assert.throws(TypeError, function() {
  Iterator.prototype.filter.call({ next: 0 }, () => true);
});

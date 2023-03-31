// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap throws TypeError when its this value is an object with a non-callable next
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
assert.throws(TypeError, function() {
  Iterator.prototype.flatMap.call({ next: 0 }, () => []);
});

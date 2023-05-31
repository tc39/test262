// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap throws TypeError when its this value is an object with a non-callable next
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
let iter = Iterator.prototype.flatMap.call({ next: 0 }, () => []);

assert.throws(TypeError, function () {
  iter.next();
});

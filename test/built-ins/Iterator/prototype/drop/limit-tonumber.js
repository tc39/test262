// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.drop
description: >
  Throws a RangeError exception when limit argument is less than 0.
info: |
  %Iterator.prototype%.drop ( limit )

  2. Let numLimit be ? ToNumber(limit).

includes: [iterators.js]
features: [iterator-helpers]
---*/

{
  let iterator = new Test262Iterator([1, 2]);
  let { value, done } = iterator.drop({ valueOf: function () { return 1; } }).next();
  assert.sameValue(value, 2);
  assert.sameValue(done, false);
}

{
  let iterator = new Test262Iterator([1, 2]);
  let { value, done } = iterator.drop([]).drop([1]).next();
  assert.sameValue(value, 2);
  assert.sameValue(done, false);
}

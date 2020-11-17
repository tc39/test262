// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.at
description: >
  Returns undefined if the specified index less than or greater than the available index range.
info: |
  Array.prototype.at( index )

  If k < 0 or k ≥ len, then return undefined.
features: [Array.prototype.at]
---*/
assert.sameValue(typeof Array.prototype.at, 'function');

let a = [];

assert.sameValue(a.at(-2), undefined, 'a.at(-2) must return undefined'); // wrap around the end
assert.sameValue(a.at(0), undefined, 'a.at(0) must return undefined');
assert.sameValue(a.at(1), undefined, 'a.at(1) must return undefined');


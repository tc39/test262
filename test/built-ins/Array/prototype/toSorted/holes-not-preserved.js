// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted does not preserve holes in the array
info: |
  Array.prototype.toSorted ( compareFn )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  4. Let items be a new empty List.
  5. Let k be 0.
  6. Repeat, while k < len,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ? Get(O, Pk).
    c. Append kValue to items.
    d. Set k to k + 1.
  ...
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var arr = [3, /* hole */, 4, /* hole */, 1];
Array.prototype[3] = 2;

var sorted = arr.toSorted();
assert.compareArray(sorted, [1, 2, 3, 4, undefined]);
assert(sorted.hasOwnProperty(4));

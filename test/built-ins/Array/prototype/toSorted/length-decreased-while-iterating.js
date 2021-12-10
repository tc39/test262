// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted caches the length getting the array elements.
info: |
  Array.prototype.toSorted ( compareFn )

  ...
  3. Let len be ? LengthOfArrayLike(O).
  ...
  5. Let k be 0.
  6. Repeat, while k < len,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ? Get(O, Pk).
    ...
features: [change-array-by-copy]
---*/

var arr = [5, 1, 4, 6, 3];
Array.prototype[3] = 2;

Object.defineProperty(arr, "2", {
  get() {
    arr.length = 1;
    return 4;
  }
});

assert.deepEqual(arr.toSorted(), [1, 2, 4, 5]);

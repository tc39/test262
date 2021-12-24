// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed caches the length getting the array elements.
info: |
  Array.prototype.toReversed ( )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
  5. Repeat, while k < len
    ...
    c. Let fromValue be ? Get(O, from).
    ...
features: [change-array-by-copy]
includes: [deepEqual.js]
---*/

var arr = [0, 1, 2];
Object.defineProperty(arr, "0", {
  get() {
    arr.push(4);
    return 0;
  }
});

assert.deepEqual(arr.toReversed(), [2, 1, 0]);

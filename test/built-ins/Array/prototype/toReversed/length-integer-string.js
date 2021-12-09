// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed converts the this value length to a number.
info: |
  Array.prototype.toReversed ( )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
---*/

assert.deepEqual(Array.prototype.toReversed.call({ length: "2", 0: 1, 1: 2, 2: 3 }), [2, 1]);

var arrayLike = {
  length: {
    valueOf: () => 2
  },
  0: 1,
  1: 2,
  2: 3,
};

assert.deepEqual(Array.prototype.toReversed.call(arrayLike), [2, 1]);

// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced caches the length getting the array elements.
info: |
  Array.prototype.toSpliced ( start, deleteCount, ...items )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...
  11. Let newLen be len + insertCount - actualDeleteCount.
  ...
  13. Let k be 0.
  14. Repeat, while k < actualStart,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ? Get(O, Pk).
    c. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
    d. Set k to k + 1.
  ...
  16. Repeat, while k < newLen,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let from be ! ToString(𝔽(k + actualDeleteCount - insertCount)).
    c. Let fromValue be ? Get(O, from).
    d. Perform ? CreateDataPropertyOrThrow(A, Pk, fromValue).
    e. Set k to k + 1.
  ...


  ToLength ( argument )

  1. Let len be ? ToIntegerOrInfinity(argument).
  2. If len ≤ 0, return +0𝔽.
  3. Return 𝔽(min(len, 253 - 1)).
features: [change-array-by-copy]
---*/

// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Length is clamped to 2^53-1 when they exceed the integer limit.
info: |
  ...
  2. Let len be ? LengthOfArrayLike(O).
  ...

  ToLength ( argument )

  1. Let len be ? ToIntegerOrInfinity(argument).
  2. If len ≤ 0, return +0𝔽.
  3. Return 𝔽(min(len, 253 - 1))

includes: [compareArray.js]
---*/

var arrayLike = {
  "9007199254740990": 2 ** 53 - 2,
  "9007199254740991": 2 ** 53 - 1,
  "9007199254740992": 2 ** 53,
  "9007199254740994": 2 ** 53 + 2, // NOTE: 2 ** 53 + 1 is 2 ** 53
  length: 2 ** 53 + 20,
};

var result = Array.prototype.splice.call(arrayLike, 0, 2 ** 53 - 3);

assert.sameValue(result.length, 2);
assert.deepEqual(result, [2 ** 5 - 2, 2 ** 5 - 1]);

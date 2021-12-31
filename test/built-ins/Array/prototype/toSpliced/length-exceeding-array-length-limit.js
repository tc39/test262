// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced limits the length to 2 ** 32 - 1
info: |
  Array.prototype.toSpliced ( start, deleteCount, ...items )

  ...
  3. Let len be ? LengthOfArrayLike(O).
  ...
  11. Let newLen be len + insertCount - actualDeleteCount.
  12. Let A be ? ArrayCreate(𝔽(newLen)).
  ...

  ArrayCreate ( length [, proto ] )

  1. If length > 2 ** 32 - 1, throw a RangeError exception.
features: [change-array-by-copy]
---*/

// Object with large "length" property
var arrayLike = {
  get "0"() {
    throw new Test262Error("Get 0");
  },
  get "4294967295" () { // 2 ** 32 - 1
    throw new Test262Error("Get 2147483648");
  },
  get "4294967296" () { // 2 ** 32
    throw new Test262Error("Get 2147483648");
  },
  length: 2 ** 32
};

assert.throws(RangeError, function() {
  Array.prototype.toSpliced.call(arrayLike, 0, 0);
});

arrayLike.length = 2 ** 32 - 1;
assert.throws(RangeError, function() {
  Array.prototype.toSpliced.call(arrayLike, 0, 0, 1);
});

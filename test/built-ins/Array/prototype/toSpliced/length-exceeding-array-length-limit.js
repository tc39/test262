// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: >
  Array.prototype.toSpliced limits the length to 2 ** 53 - 1
info: |
  Array.prototype.toSpliced ( start, deleteCount, ...items )

  ...
  3. Let len be ? LengthOfArrayLike(O).
  ...
  11. Let newLen be len + insertCount - actualDeleteCount.
  12. Let A be ? ArrayCreate(𝔽(newLen)).
  ...

  ArrayCreate ( length [, proto ] )

  1. If length > 2 ** 31 - 1, throw a RangeError exception.
features: [change-array-by-copy]
---*/

// Object with large "length" property
var arrayLike = {
  get "0" () {
    throw new Test262Error("Get 0");
  },
  get "2147483647" () { // 2 ** 31 - 1
    throw new Test262Error("Get 2147483648");
  },
  get "2147483648" () { // 2 ** 31
    throw new Test262Error("Get 2147483648");
  },
  length: 2 ** 31
};

assert.throws(TypeError, function() {
  Array.prototype.toSpliced.call(arrayLike, 0, 0);
});

arrayLike.length = 2 ** 31 - 1;
assert.throws(TypeError, function() {
  Array.prototype.toSpliced.call(arrayLike, 0, 0, 1);
});

// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed limits the length to 2 ** 53 - 1
info: |
  Array.prototype.toReversed ( )

  ...
  2. Let len be ? LengthOfArrayLike(O).
  3. Let A be ? ArrayCreate(𝔽(len)).
  ...

  ArrayCreate ( length [, proto ] )

  1. If length > 2 ** 31 - 1, throw a RangeError exception.
features: [change-array-by-copy]
---*/

// Object with large "length" property
var arrayLike = {
  get "0"() {
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
  Array.prototype.toReversed.call(arrayLike);
});

// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.from
description: Returns error produced by interpreting length property as a length
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  7. Let len be ? ToLength(? Get(arrayLike, "length")).
  ...
features: [Symbol.toPrimitive]
includes: [testTypedArray.js]
---*/

var arrayLike = { length: {} };

arrayLike.length[Symbol.toPrimitive] = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  TypedArray.from(arrayLike);
});

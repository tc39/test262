// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.1.2
description: TypedArray rejects non-integer arguments
info: >
  22.2.1.2 %TypedArray% ( length )

  ...
  4. Let numberLength be ToNumber(length).
  5. Let elementLength be ToLength(numberLength).
  6. ReturnIfAbrupt(elementLength).
  7. If SameValueZero(numberLength, elementLength) is false, throw a RangeError
  exception.
  ...
features: [TypedArray]
includes: [testTypedArray.js]
---*/

assert.throws(RangeError, function() {
  new TypedArray(1.1);
});

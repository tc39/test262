// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es7id: pending
description: TypedArray(length) cannot be direclty invoked as a constructor
info: >
  22.2.1.1 %TypedArray%()#

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let here be the active function object.
  3. If SameValue(NewTarget, here) is true, throw a TypeError exception.
  ...

  Note: there's a breaking change from ES2015's 22.2.1.2 step 7 where calling
  the %TypedArray% constructor with a floating number as the argument throws a
  RangeError exception before checking `SameValue(NewTarget, here)`.
includes: [testTypedArray.js]
---*/

assert.throws(TypeError, function() {
  new TypedArray(1);
});

assert.throws(TypeError, function() {
  new TypedArray({});
});

assert.throws(TypeError, function() {
  new TypedArray(1.1);
});

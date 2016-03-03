// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.toString
description: >
  Throws a TypeError exception when `this` cannot be converted to Object
info: >
  22.2.3.29 %TypedArray%.prototype.toString ( )

  22.1.3.28 Array.prototype.toString ( )

  1. Let array be ? ToObject(this value).
  ...
includes: [testTypedArray.js]
---*/

var toString = TypedArray.prototype.toString;

assert.throws(TypeError, function() {
  toString.call(undefined);
}, "this is undefined");

assert.throws(TypeError, function() {
  toString.call(null);
}, "this is null");

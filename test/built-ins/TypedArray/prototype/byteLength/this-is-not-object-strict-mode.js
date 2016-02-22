// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: Throws a TypeError exception when `this` is null or undefined
info: >
  22.2.3.2 get %TypedArray%.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
flags: [onlyStrict]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter.call(undefined);
});

assert.throws(TypeError, function() {
  getter.call(null);
});

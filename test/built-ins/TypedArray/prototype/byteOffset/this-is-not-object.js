// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.3
description: Throws a TypeError exception when `this` is not Object
info: >
  22.2.3.3 get %TypedArray%.prototype.byteOffset

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
features: [Symbol]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, "byteOffset"
).get;

assert.throws(TypeError, function() {
  getter.call(42);
});

assert.throws(TypeError, function() {
  getter.call("1");
});

assert.throws(TypeError, function() {
  getter.call(true);
});

assert.throws(TypeError, function() {
  getter.call(false);
});

var s = Symbol("s");
assert.throws(TypeError, function() {
  getter.call(s);
});

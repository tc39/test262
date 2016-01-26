// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.4.1
description: >
  Throws a TypeError if NewTarget is undefined.
info: >
  TypedArray( ... argumentsList)

  1. If NewTarget is undefined, throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Uint8ClampedArray();
}, "Uint8ClampedArray()");

assert.throws(TypeError, function() {
  Uint8ClampedArray(0);
}, "Uint8ClampedArray(0)");

assert.throws(TypeError, function() {
  Uint8ClampedArray(new Uint8ClampedArray(1));
}, "Uint8ClampedArray(uint8clampedArray)");

assert.throws(TypeError, function() {
  Uint8ClampedArray([]);
}, "Uint8ClampedArray(array)");

assert.throws(TypeError, function() {
  Uint8ClampedArray(new ArrayBuffer(8));
}, "Uint8ClampedArray(arrayBuffer)");

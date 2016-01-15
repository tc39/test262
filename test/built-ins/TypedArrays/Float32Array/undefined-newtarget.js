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
  Float32Array();
}, "Float32Array()");

assert.throws(TypeError, function() {
  Float32Array(0);
}, "Float32Array(0)");

assert.throws(TypeError, function() {
  Float32Array(new Float32Array(1));
}, "Float32Array(float32Array)");

assert.throws(TypeError, function() {
  Float32Array([]);
}, "Float32Array(array)");

assert.throws(TypeError, function() {
  Float32Array(new ArrayBuffer(8));
}, "Float32Array(arrayBuffer)");

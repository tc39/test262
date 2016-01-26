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
  Float64Array();
}, "Float64Array()");

assert.throws(TypeError, function() {
  Float64Array(0);
}, "Float64Array(0)");

assert.throws(TypeError, function() {
  Float64Array(new Float64Array(1));
}, "Float64Array(float64Array)");

assert.throws(TypeError, function() {
  Float64Array([]);
}, "Float64Array(array)");

assert.throws(TypeError, function() {
  Float64Array(new ArrayBuffer(8));
}, "Float64Array(arrayBuffer)");

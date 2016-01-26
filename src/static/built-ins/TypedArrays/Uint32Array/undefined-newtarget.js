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
  Uint32Array();
}, "Uint32Array()");

assert.throws(TypeError, function() {
  Uint32Array(0);
}, "Uint32Array(0)");

assert.throws(TypeError, function() {
  Uint32Array(new Uint32Array(1));
}, "Uint32Array(uint32Array)");

assert.throws(TypeError, function() {
  Uint32Array([]);
}, "Uint32Array(array)");

assert.throws(TypeError, function() {
  Uint32Array(new ArrayBuffer(8));
}, "Uint32Array(arrayBuffer)");

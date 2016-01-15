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
  Int16Array();
}, "Int16Array()");

assert.throws(TypeError, function() {
  Int16Array(0);
}, "Int16Array(0)");

assert.throws(TypeError, function() {
  Int16Array(new Int16Array(1));
}, "Int16Array(int16Array)");

assert.throws(TypeError, function() {
  Int16Array([]);
}, "Int16Array(array)");

assert.throws(TypeError, function() {
  Int16Array(new ArrayBuffer(8));
}, "Int16Array(arrayBuffer)");

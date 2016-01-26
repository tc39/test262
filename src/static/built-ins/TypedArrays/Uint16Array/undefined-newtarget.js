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
  Uint16Array();
}, "Uint16Array()");

assert.throws(TypeError, function() {
  Uint16Array(0);
}, "Uint16Array(0)");

assert.throws(TypeError, function() {
  Uint16Array(new Uint16Array(1));
}, "Uint16Array(uint16Array)");

assert.throws(TypeError, function() {
  Uint16Array([]);
}, "Uint16Array(array)");

assert.throws(TypeError, function() {
  Uint16Array(new ArrayBuffer(8));
}, "Uint16Array(arrayBuffer)");

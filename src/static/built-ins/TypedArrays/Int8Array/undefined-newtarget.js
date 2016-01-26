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
  Int8Array();
}, "Int8Array()");

assert.throws(TypeError, function() {
  Int8Array(0);
}, "Int8Array(0)");

assert.throws(TypeError, function() {
  Int8Array(new Int8Array(1));
}, "Int8Array(int8Array)");

assert.throws(TypeError, function() {
  Int8Array([]);
}, "Int8Array(array)");

assert.throws(TypeError, function() {
  Int8Array(new ArrayBuffer(8));
}, "Int8Array(arrayBuffer)");

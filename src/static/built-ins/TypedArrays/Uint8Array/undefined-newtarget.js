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
  Uint8Array();
}, "Uint8Array()");

assert.throws(TypeError, function() {
  Uint8Array(0);
}, "Uint8Array(0)");

assert.throws(TypeError, function() {
  Uint8Array(new Uint8Array(1));
}, "Uint8Array(uint8Array)");

assert.throws(TypeError, function() {
  Uint8Array([]);
}, "Uint8Array(array)");

assert.throws(TypeError, function() {
  Uint8Array(new ArrayBuffer(8));
}, "Uint8Array(arrayBuffer)");

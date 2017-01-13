// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Throws a TypeError if `this` does not have an [[ArrayBufferData]] internal slot.
info: >
---*/

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.slice.call({});
}, "`this` value is Object");

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.slice.call([]);
}, "`this` value is Array");

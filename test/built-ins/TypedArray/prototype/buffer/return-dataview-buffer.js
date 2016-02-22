// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.1
description: |
  Return buffer from DataView's instance [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.1 get %TypedArray%.prototype.buffer

  ...
  4. Let buffer be the value of O's [[ViewedArrayBuffer]] internal slot.
  5. Return buffer.
includes: [testTypedArray.js]
---*/

var getter = Object.getOwnPropertyDescriptor(
  TypedArray.prototype, "buffer"
).get;

var buffer = new ArrayBuffer(8);
var dv = new DataView(buffer, 0);

assert.sameValue(getter.call(dv), buffer);

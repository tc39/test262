// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: |
  Return buffer from DataView's instance [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.2 get %TypedArray%.prototype.byteLength

  ...
  6. Let size be the value of O's [[ByteLength]] internal slot.
  7. Return size.
includes: [testTypedArray.js]
---*/

var getter = Object.getOwnPropertyDescriptor(
  TypedArray.prototype, "byteLength"
).get;

var buffer = new ArrayBuffer(64);
var dv = new DataView(buffer, 0);

assert.sameValue(getter.call(dv), 64);

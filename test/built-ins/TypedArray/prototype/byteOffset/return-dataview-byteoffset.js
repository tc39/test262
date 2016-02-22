// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: |
  Return buffer from DataView's instance [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.2 get %TypedArray%.prototype.byteOffset

  ...
  6. Let offset be the value of O's [[ByteOffset]] internal slot.
  7. Return size.
includes: [testTypedArray.js]
---*/

var getter = Object.getOwnPropertyDescriptor(
  TypedArray.prototype, "byteOffset"
).get;

var buffer = new ArrayBuffer(64);

var dv1 = new DataView(buffer, 0);
assert.sameValue(getter.call(dv1), 0);

var dv2 = new DataView(buffer, 32);
assert.sameValue(getter.call(dv2), 32);

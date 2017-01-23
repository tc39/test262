// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Large `start` index is clamped to [[ArrayBufferByteLength]].
info: >
  SharedArrayBuffer.prototype.slice ( start, end )
---*/

var arrayBuffer = new SharedArrayBuffer(8);

var start = 10, end = 8;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 0, "slice(10, 8)");

var start = 0x100000000, end = 7;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 0, "slice(0x100000000, 7)");

var start = +Infinity, end = 6;
var result = arrayBuffer.slice(start, end);
assert.sameValue(result.byteLength, 0, "slice(+Infinity, 6)");

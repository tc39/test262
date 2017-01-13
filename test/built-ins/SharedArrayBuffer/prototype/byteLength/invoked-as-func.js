// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Throws a TypeError exception when invoked as a function
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter();
});

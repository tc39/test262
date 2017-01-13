// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Requires this value to have a [[ArrayBufferData]] internal slot
---*/

assert.throws(TypeError, function() {
  SharedArrayBuffer.prototype.byteLength;
});

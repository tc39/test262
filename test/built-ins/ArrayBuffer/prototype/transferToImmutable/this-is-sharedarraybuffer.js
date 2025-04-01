// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [SharedArrayBuffer, immutable-arraybuffer]
---*/

var sab = new SharedArrayBuffer(0);

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.transferToImmutable.call(sab);
}, '`this` value cannot be a SharedArrayBuffer');

// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setBigUint64 throws if buffer is immutable
features: [DataView, ArrayBuffer, BigInt, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer.transferToImmutable(), 0);

assert.throws(TypeError, function() {
  sample.setBigUint64(0, 0n);
});

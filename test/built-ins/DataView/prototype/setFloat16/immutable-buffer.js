// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setFloat16 throws if buffer is immutable
esid: sec-dataview.prototype.setfloat16
features: [DataView, ArrayBuffer, Float16Array, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer.transferToImmutable(), 0);

assert.throws(TypeError, function() {
  sample.setFloat16(0, 0);
});

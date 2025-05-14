// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setInt8 throws if buffer is immutable
esid: sec-dataview.prototype.setint8
features: [DataView, ArrayBuffer, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer.transferToImmutable(), 0);

assert.throws(TypeError, function() {
  sample.setInt8(0, 0);
});

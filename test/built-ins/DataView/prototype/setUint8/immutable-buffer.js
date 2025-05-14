// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: setUint8 throws if buffer is immutable
esid: sec-dataview.prototype.setuint8
features: [DataView, ArrayBuffer, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer.transferToImmutable(), 0);

assert.throws(TypeError, function() {
  sample.setUint8(0, 0);
});

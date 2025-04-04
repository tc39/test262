// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [uint8array-base64, TypedArray, immutable-arraybuffer]
---*/

var buffer = new ArrayBuffer(3);
var target = new Uint8Array(buffer.transferToImmutable());
assert.throws(TypeError, function() {
  target.setFromBase64('Zg==');
});

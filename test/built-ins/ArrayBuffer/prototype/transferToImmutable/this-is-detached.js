// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: transferToImmutable throws if receiver is detached ArrayBuffer
includes: [detachArrayBuffer.js]
features: [immutable-arraybuffer]
---*/

assert.sameValue(typeof ArrayBuffer.prototype.transferToImmutable, 'function');

var ab = new ArrayBuffer(1);

$DETACHBUFFER(ab);

assert.throws(TypeError, function() {
  ab.transferToImmutable();
});

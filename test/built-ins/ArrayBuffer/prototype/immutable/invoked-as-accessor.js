// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [ArrayBuffer, immutable-arraybuffer]
---*/

assert.throws(TypeError, function() {
  ArrayBuffer.prototype.immutable;
});

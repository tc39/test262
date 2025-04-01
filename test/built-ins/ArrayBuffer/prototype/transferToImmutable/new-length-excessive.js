// Copyright (C) 2024-2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [immutable-arraybuffer]
---*/

var ab = new ArrayBuffer(0);

assert.throws(RangeError, function() {
  // Math.pow(2, 53) = 9007199254740992
  ab.transferToImmutable(9007199254740992);
});

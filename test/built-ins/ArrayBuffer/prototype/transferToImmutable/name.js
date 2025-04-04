// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [immutable-arraybuffer]
includes: [propertyHelper.js]
---*/

verifyProperty(ArrayBuffer.prototype.transferToImmutable, 'name', {
  value: 'transferToImmutable',
  enumerable: false,
  writable: false,
  configurable: true
});

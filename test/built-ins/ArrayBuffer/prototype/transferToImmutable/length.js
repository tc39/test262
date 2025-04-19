// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: verify length property of transferToImmutable
esid: sec-arraybuffer.prototype.transfertoimmutable
includes: [propertyHelper.js]
features: [immutable-arraybuffer]
---*/

verifyProperty(ArrayBuffer.prototype.transferToImmutable, 'length', {
  value: 0,
  enumerable: false,
  writable: false,
  configurable: true
});

// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: verify transferToImmutable property attributes
esid: sec-arraybuffer.prototype.transfertoimmutable
includes: [propertyHelper.js]
features: [immutable-arraybuffer]
---*/

verifyProperty(ArrayBuffer.prototype, 'transferToImmutable', {
  enumerable: false,
  writable: true,
  configurable: true
});

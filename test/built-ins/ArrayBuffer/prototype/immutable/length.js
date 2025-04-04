// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: verify immutable getter's length property attributes and value
includes: [propertyHelper.js]
features: [ArrayBuffer, immutable-arraybuffer]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'immutable');

verifyProperty(desc.get, 'length', {
  value: 0,
  enumerable: false,
  writable: false,
  configurable: true
});

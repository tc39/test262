// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.fromhexinto
description: >
  Uint8Array.fromHexInto.length is 2.
includes: [propertyHelper.js]
features: [uint8array-base64]
---*/

verifyProperty(Uint8Array.fromHexInto, 'length', {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});

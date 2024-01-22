// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.fromhexinto
description: >
  Uint8Array.fromHexInto.name is "fromHexInto".
includes: [propertyHelper.js]
features: [uint8array-base64]
---*/

verifyProperty(Uint8Array.fromHexInto, 'name', {
  value: 'fromHexInto',
  enumerable: false,
  writable: false,
  configurable: true
});

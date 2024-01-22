// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: >
  Uint8Array.fromBase64Into.name is "fromBase64Into".
includes: [propertyHelper.js]
features: [uint8array-base64]
---*/

verifyProperty(Uint8Array.fromBase64Into, 'name', {
  value: 'fromBase64Into',
  enumerable: false,
  writable: false,
  configurable: true
});

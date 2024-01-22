// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: >
  Uint8Array.fromBase64Into has default data property attributes.
includes: [propertyHelper.js]
features: [uint8array-base64]
---*/

verifyProperty(Uint8Array, 'fromBase64Into', {
  enumerable: false,
  writable: true,
  configurable: true
});

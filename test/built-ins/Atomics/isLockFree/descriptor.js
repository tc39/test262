// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-atomics.islockfree
description: Testing descriptor property of Atomics.isLockFree
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyProperty(Atomics, 'isLockFree', {
  enumerable: false,
  writable: true,
  configurable: true,
});

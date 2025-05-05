// Copyright (C) 2015 the V8 project authors. All rights reserved.
// Copyright (C) 2025 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  WeakMap.prototype.getOrInsertComputed property descriptor
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
flags: [noStrict]
---*/
assert.sameValue(
  typeof WeakMap.prototype.getOrInsertComputed,
  'function',
  'typeof WeakMap.prototype.getOrInsertComputed is "function"'
);

verifyProperty(WeakMap.prototype, "getOrInsertComputed", {
  value: WeakMap.prototype.getOrInsertComputed,
  writable: true,
  enumerable: false,
  configurable: true
});


// Copyright (C) 2015 the V8 project authors. All rights reserved.
// Copyright (C) 2024 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Property type and descriptor.
info: |
  Map.prototype.getOrInsert ( key , value )

  17 ECMAScript Standard Built-in Objects
includes: [deepEqual.js]
features: [upsert]
flags: [noStrict]
---*/
assert.sameValue(
  typeof Map.prototype.getOrInsert,
  'function',
  '`typeof Map.prototype.getOrInsert` is `function`'
);


assert.deepEqual(Object.getOwnPropertyDescriptor(Map.prototype, "getOrInsert"), {
  value: Map.prototype.getOrInsert,
  writable: true,
  enumerable: false,
  configurable: true
});



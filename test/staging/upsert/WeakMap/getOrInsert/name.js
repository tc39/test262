// Copyright (C) 2025 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  WeakMap.prototype.getOrInsert.name descriptor
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  17 ECMAScript Standard Built-in Objects
includes: [deepEqual.js]
flags: [noStrict]
---*/
// Copyright (C) 2015 the V8 project authors. All rights reserved.
assert.deepEqual(Object.getOwnPropertyDescriptor(Map.prototype.getOrInsert, "name"), {
  value: "getOrInsert",
  writable: false,
  enumerable: false,
  configurable: true
});


// Copyright (C) 2025 Jonas Haukenes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  WeakMap.prototype.getOrInsert property descriptor
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  17 ECMAScript Standard Built-in Objects
includes: [deepEqual.js]
flags: [noStrict]
---*/
// Copyright (C) 2015 the V8 project authors. All rights reserved.
assert.sameValue(
  typeof WeakMap.prototype.getOrInsert,
  'function',
  'typeof WeakMap.prototype.getOrInsert is "function"'
);

assert.deepEqual(Object.getOwnPropertyDescriptor(WeakMap.prototype, "getOrInsert"), {
  value: WeakMap.prototype.getOrInsert,
  writable: true,
  enumerable: false,
  configurable: true
});


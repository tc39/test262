// Copyright (C) 2024 Jonas Haukenes, Mathias Ness. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Map.prototype.getOrInsertComputed.name value and descriptor.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [deepEqual.js]
flags: [noStrict]
---*/
// Copyright (C) 2015 the V8 project authors. All rights reserved.
assert.deepEqual(Object.getOwnPropertyDescriptor(Map.prototype.getOrInsertComputed, "name"), {
  value: "getOrInsertComputed",
  writable: false,
  enumerable: false,
  configurable: true
});


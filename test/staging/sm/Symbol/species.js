// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [deepEqual.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1131043;
var summary = "Implement @@species getter for builtin types";

print(BUGNUMBER + ": " + summary);

var TypedArray = Object.getPrototypeOf(Int8Array);

for (var C of [Array, Map, Set, RegExp,
               Int8Array, Uint8Array, Uint8ClampedArray,
               Int16Array, Uint16Array, Int32Array, Uint32Array,
               Float32Array, Float64Array,
               ArrayBuffer]) {
  assert.sameValue(C[Symbol.species], C);
}

for (C of [Array, Map, Set, RegExp,
           TypedArray,
           ArrayBuffer]) {
  var desc = Object.getOwnPropertyDescriptor(C, Symbol.species);
  assert.deepEqual(Object.keys(desc).sort(), ["configurable", "enumerable", "get", "set"]);
  assert.sameValue(desc.set, undefined);
  assert.sameValue(desc.enumerable, false);
  assert.sameValue(desc.configurable, true);
  assert.sameValue(desc.get.apply(null), null);
  assert.sameValue(desc.get.apply(undefined), undefined);
  assert.sameValue(desc.get.apply(42), 42);
}


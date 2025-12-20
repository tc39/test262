// Copyright (C) 2025 @styfle. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-create-bytes-module
description: Creates bytes module from js file
flags: [module]
features: [import-attributes, immutable-arraybuffer, import-bytes]
includes: [compareArray.js]
---*/

import value from './bytes-from-js_FIXTURE.js' with { type: 'bytes' };

assert(value instanceof Uint8Array);
assert(value.buffer instanceof ArrayBuffer);

assert.sameValue(value.length, 16);
assert.sameValue(value.buffer.byteLength, 16);

assert.compareArray(
  Array.from(value),
  [
    0x76, // v
    0x61, // a
    0x72, // r
    0x20, // (space)
    0x66, // f
    0x6f, // o
    0x6f, // o
    0x20, // (space)
    0x3d, // =
    0x20, // (space)
    0x27, // '
    0x62, // b
    0x61, // a
    0x72, // r
    0x27, // '
    0x0a, // (newline)
  ]
);

assert.throws(TypeError, function() {
  value.buffer.resize(0);
});

assert.throws(TypeError, function() {
  value.buffer.transfer();
});

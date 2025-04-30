// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  ArrayBuffer getters should have get prefix
esid: pending
---*/

assert.sameValue(Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species).get.name, "get [Symbol.species]");
assert.sameValue(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get.name, "get byteLength");

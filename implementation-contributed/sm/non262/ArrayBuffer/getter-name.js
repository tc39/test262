// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-ArrayBuffer-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var BUGNUMBER = 1180290;
var summary = 'ArrayBuffer getters should have get prefix';

print(BUGNUMBER + ": " + summary);

assert.sameValue(Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species).get.name, "get [Symbol.species]");
assert.sameValue(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get.name, "get byteLength");


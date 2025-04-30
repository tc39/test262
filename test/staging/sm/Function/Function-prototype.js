// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var desc = Object.getOwnPropertyDescriptor(Function.prototype, "length");
assert.deepEqual(desc,
    {value: 0, writable: false, enumerable: false, configurable: true});

assert.sameValue(Function.prototype.prototype, undefined);
assert.sameValue(Function.prototype.callee, undefined);
assert.throws(TypeError, () => Function.prototype.caller);
assert.throws(TypeError, () => Function.prototype.arguments);


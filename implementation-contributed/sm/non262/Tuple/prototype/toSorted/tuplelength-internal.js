// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*//* Use internal length rather than getting a length property */
var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};

var internalLength = Object.getOwnPropertyDescriptor(Tuple.prototype, "length").get;
Object.defineProperty(Tuple.prototype, "length", desc);

let sample = #[42,42,42];

getCalls = 0;

var result = sample.toSorted();

assert.sameValue(getCalls, 0)
assert.sameValue(result, sample);
assert.sameValue(result[0], sample[0]);
assert.sameValue(result[1], sample[1]);
assert.sameValue(result[2], sample[2]);
assert.sameValue(result.length, 0);
assert.sameValue(internalLength.call(result), 3);


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
---*/
/* Ensure that slice uses internal length and not length property */


var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};

Object.defineProperty(Tuple.prototype, "length", desc);

var sample = Object(#[42, 43]);

var result = sample.slice();

assert.sameValue(getCalls, 0, "ignores length properties");
assert.sameValue(result, #[42, 43]);


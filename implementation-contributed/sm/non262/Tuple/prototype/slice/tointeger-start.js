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
---*//*
8.2.3.5
...
4. Let relativeStart be ? ToInteger(start).
*/

var obj = {
  valueOf: function() {
    return 2;
  }
};


var sample = #[40, 41, 42, 43];

assert.sameValue(sample.slice(false), sample);
assert.sameValue(sample.slice(true), #[41, 42, 43]);

assert.sameValue(sample.slice(NaN), sample);
assert.sameValue(sample.slice(null), sample);
assert.sameValue(sample.slice(undefined), sample);

assert.sameValue(sample.slice(0.6), sample);
assert.sameValue(sample.slice(1.1), #[41, 42, 43]);
assert.sameValue(sample.slice(1.5), #[41, 42, 43]);
assert.sameValue(sample.slice(-0.6), sample);
assert.sameValue(sample.slice(-1.1), #[43]);
assert.sameValue(sample.slice(-1.5), #[43]);

assert.sameValue(sample.slice("3"), #[43]);

assert.sameValue(sample.slice(obj), #[42, 43]);


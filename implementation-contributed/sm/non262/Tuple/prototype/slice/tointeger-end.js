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
6. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
*/

var obj = {
  valueOf: function() {
    return 2;
  }
};


var sample = #[40, 41, 42, 43];

assert.sameValue(sample.slice(0, false), #[]);
assert.sameValue(sample.slice(0, true), #[40]);

assert.sameValue(sample.slice(0, NaN), #[]);
assert.sameValue(sample.slice(0, null), #[]);
assert.sameValue(sample.slice(0, undefined), #[40, 41, 42, 43]);

assert.sameValue(sample.slice(0, 0.6), #[]);
assert.sameValue(sample.slice(0, 1.1), #[40]);
assert.sameValue(sample.slice(0, 1.5), #[40]);
assert.sameValue(sample.slice(0, -0.6), #[]);
assert.sameValue(sample.slice(0, -1.1), #[40, 41, 42]);
assert.sameValue(sample.slice(0, -1.5), #[40, 41, 42]);

assert.sameValue(sample.slice(0, "3"), #[40, 41, 42]);

assert.sameValue(sample.slice(0, obj), #[40, 41]);


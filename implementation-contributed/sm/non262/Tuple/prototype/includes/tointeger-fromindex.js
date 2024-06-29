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
---*/// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: get the integer value from fromIndex
*/

var obj = {
  valueOf: function() {
    return 1;
  }
};

var sample = #[42, 43];
assert.sameValue(sample.includes(42, "1"), false, "string [0]");
assert.sameValue(sample.includes(43, "1"), true, "string [1]");

assert.sameValue(sample.includes(42, true), false, "true [0]");
assert.sameValue(sample.includes(43, true), true, "true [1]");

assert.sameValue(sample.includes(42, false), true, "false [0]");
assert.sameValue(sample.includes(43, false), true, "false [1]");

assert.sameValue(sample.includes(42, NaN), true, "NaN [0]");
assert.sameValue(sample.includes(43, NaN), true, "NaN [1]");

assert.sameValue(sample.includes(42, null), true, "null [0]");
assert.sameValue(sample.includes(43, null), true, "null [1]");

assert.sameValue(sample.includes(42, undefined), true, "undefined [0]");
assert.sameValue(sample.includes(43, undefined), true, "undefined [1]");

assert.sameValue(sample.includes(42, null), true, "null [0]");
assert.sameValue(sample.includes(43, null), true, "null [1]");

assert.sameValue(sample.includes(42, obj), false, "object [0]");
assert.sameValue(sample.includes(43, obj), true, "object [1]");


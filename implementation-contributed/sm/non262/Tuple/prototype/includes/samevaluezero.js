// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  search element is compared using SameValueZero
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

var sample = #[42, 0, 1, NaN];
assert.sameValue(sample.includes("42"), false);
assert.sameValue(sample.includes([42]), false);
assert.sameValue(sample.includes(#[42]), false);
assert.sameValue(sample.includes(42.0), true);
assert.sameValue(sample.includes(-0), true);
assert.sameValue(sample.includes(true), false);
assert.sameValue(sample.includes(false), false);
assert.sameValue(sample.includes(null), false);
assert.sameValue(sample.includes(""), false);
assert.sameValue(sample.includes(NaN), true);


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
let simple1 = #[1, 2];
let simple2 = #[1, 2];
let simpleDiff = #[0, 2];
let simpleDiff2 = #[1];

assert.sameValue(simple1 === simple2, true);
assert.sameValue(simple1 === simpleDiff, false);
assert.sameValue(simple1 === simpleDiff2, false);

let withPositiveZero = #[1, 2, +0];
let withPositiveZero2 = #[1, 2, +0];
let withNegativeZero = #[1, 2, -0];

assert.sameValue(withPositiveZero === withPositiveZero2, true);
assert.sameValue(Object.is(withPositiveZero, withPositiveZero2), true);
assert.sameValue(#[withPositiveZero] === #[withPositiveZero2], true);
assert.sameValue(Object.is(#[withPositiveZero], #[withPositiveZero2]), true);

assert.sameValue(withPositiveZero === withNegativeZero, true);
assert.sameValue(Object.is(withPositiveZero, withNegativeZero), false);
assert.sameValue(#[withPositiveZero] === #[withNegativeZero], true);
assert.sameValue(Object.is(#[withPositiveZero], #[withNegativeZero]), false);

let withNaN = #[1, NaN, 2];
let withNaN2 = #[1, NaN, 2];

assert.sameValue(withNaN === withNaN2, true);
assert.sameValue(Object.is(withNaN, withNaN2), true);


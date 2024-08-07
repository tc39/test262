// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
assert.sameValue(#{} === #{}, true);
assert.sameValue(#{} === #{ x: 1 }, false);
assert.sameValue(#{} === #{ x: undefined }, false);
assert.sameValue(#{ x: 1 } === #{ x: 1 }, true);
assert.sameValue(#{ x: 2 } === #{ x: 1 }, false);
assert.sameValue(#{ y: 1 } === #{ x: 1 }, false);
assert.sameValue(#{ x: 1, y: 2 } === #{ y: 2, x: 1 }, true);
assert.sameValue(#{ x: 1, y: 2 } === #{ y: 1, x: 2 }, false);

let withPositiveZero = #{ x: +0 };
let withNegativeZero = #{ x: -0 };

assert.sameValue(withPositiveZero === withNegativeZero, true);
assert.sameValue(#[withPositiveZero] === #[withNegativeZero], true);
assert.sameValue(Object.is(withPositiveZero, withNegativeZero), false);
assert.sameValue(Object.is(#[withPositiveZero], #[withNegativeZero]), false);

assert.sameValue(#{ x: NaN } === #{ x: NaN }, true);
assert.sameValue(Object.is(#{ x: NaN }, #{ x: NaN }), true);


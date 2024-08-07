// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
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
---*/assert.deepEqual([1, 2].concat(#[3, 4]), [1, 2, 3, 4]);
assert.deepEqual([].concat(#[3, 4]), [3, 4]);
assert.deepEqual([].concat(#[]), []);
assert.deepEqual([1, 2, 3].concat(#[]), [1, 2, 3]);


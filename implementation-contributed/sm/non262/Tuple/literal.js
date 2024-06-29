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
let tup = #[1, 2, 3];

assert.sameValue(tup.length, 3);
assert.sameValue(tup[0], 1);
assert.sameValue(tup[1], 2);
assert.sameValue(tup[2], 3);

let arr = [3, 4, 5];
tup = #[1, 2, ...arr, 6, ...arr];

assert.sameValue(tup.length, 9);
assert.sameValue(tup[0], 1);
assert.sameValue(tup[1], 2);
assert.sameValue(tup[2], 3);
assert.sameValue(tup[3], 4);
assert.sameValue(tup[4], 5);
assert.sameValue(tup[5], 6);
assert.sameValue(tup[6], 3);
assert.sameValue(tup[7], 4);
assert.sameValue(tup[8], 5);

tup = #[(() => 1)()];

assert.sameValue(tup.length, 1);
assert.sameValue(tup[0], 1);

tup = #[];
assert.sameValue(tup.length, 0);


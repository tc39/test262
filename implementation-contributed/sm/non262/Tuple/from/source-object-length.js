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
---*/var array = [2, 4, 0, 16];
var expectedTuple = #[2, 4, undefined, 16];
var obj = {
  length: 4,
  0: 2,
  1: 4,
  2: 0,
  3: 16
};
delete obj[2];
let t = Tuple.from(obj);
assert.sameValue(t, expectedTuple);


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
var obj = {
  0: 2,
  1: 4,
  2: 8,
  3: 16
}

var t = Tuple.from(obj);
assert.sameValue(t.length, 0);


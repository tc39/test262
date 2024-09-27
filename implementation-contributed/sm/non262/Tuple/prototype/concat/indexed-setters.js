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
// If an indexed Array setter is overridden, TupleConcat shouldn't use it
// when constructing the intermediate array

var z = 5;
for (i = 0; i < 4; i++) {
    Object.defineProperty(Array.prototype, i, { set: function(y) { z = 42; }});
}
var newT = #[1, 2].concat([3, 4]);
assert.sameValue(z, 5);

newT = #[1, 2].concat("hello");
assert.sameValue(z, 5);


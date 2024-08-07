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
// Test that objects (in this case, closures) containing Tuples are traced properly
function foo() {
    var tup = #[1];
    (() => assert.sameValue(tup, #[1]))();
}

let n = 1000;
for (i = 0; i < n; i++) {
    foo();
}


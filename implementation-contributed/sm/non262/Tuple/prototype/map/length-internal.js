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
---*/Object.defineProperty(Tuple.prototype, "length", {value: 0});
let t = #[1,2,3];
var result = t.map(x => x + 1);
// overriding length shouldn't have an effect
assert.sameValue(result, #[2,3,4]);


Object.defineProperty(Tuple.prototype, "length", {
  get() { return 0 }
});
let u = #[1,2,3];
var result = u.map(x => x + 1);
// overriding length shouldn't have an effect
assert.sameValue(result, #[2,3,4]);


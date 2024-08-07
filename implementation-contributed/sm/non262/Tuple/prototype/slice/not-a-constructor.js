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
assert.sameValue(isConstructor(Tuple.prototype.slice), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
  new t.slice();
}, TypeError, '`let t = #[1]; new t.slice()` throws TypeError');


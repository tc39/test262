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
assert.sameValue(Object.prototype.toString.call(#[1,2,3]),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(Object(#[1,2,3])),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(#[]),
         "[object Tuple]");
assert.sameValue(Object.prototype.toString.call(Object(#[])),
         "[object Tuple]");


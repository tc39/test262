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
//CHECK#1
Tuple.prototype.toString = Object.prototype.toString;
var x = Tuple();
assert.sameValue(x.toString(), "[object Tuple]");

//CHECK#2
Tuple.prototype.toString = Object.prototype.toString;
var x = Tuple(0, 1, 2);
assert.sameValue(x.toString(), "[object Tuple]");


// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.includes does not implement [[Construct]], is not new-able
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

assert.sameValue(
  isConstructor(Tuple.prototype.includes),
  false,
  'isConstructor(Tuple.prototype.includes) must return false'
);

assertThrowsInstanceOf(() => new Tuple.prototype.includes(1),
		       TypeError, '`new Tuple.prototype.includes(1)` throws TypeError');



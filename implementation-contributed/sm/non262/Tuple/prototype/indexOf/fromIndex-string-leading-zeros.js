// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf - value of 'fromIndex' which is a string containing a number with leading zeros
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

var target = #[];

assert.sameValue(#[0, 1, target, 3, 4].indexOf(target, "0003.10"), -1, '#[0, 1, target, 3, 4].indexOf(target, "0003.10")');
assert.sameValue(#[0, 1, 2, target, 4].indexOf(target, "0003.10"), 3, '#[0, 1, 2, target, 4].indexOf(target, "0003.10")');


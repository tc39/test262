// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: |
  Tuple.prototype.indexOf - 'fromIndex' is a positive non-integer, verify truncation occurs in the proper direction
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
---*/

var target = #[];

assert.sameValue(#[0, target, 2].indexOf(target, 2.5), -1, '#[0, target, 2].indexOf(target, 2.5)');
assert.sameValue(#[0, 1, target].indexOf(target, 2.5), 2, '#[0, 1, target].indexOf(target, 2.5)');


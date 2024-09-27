// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf when fromIndex is string
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

var a = #[1, 2, 1, 2, 1, 2];

assert.sameValue(a.indexOf(2, "2"), 3, '"2" resolves to 2');
assert.sameValue(a.indexOf(2, "one"), 1, '"one" resolves to 0');


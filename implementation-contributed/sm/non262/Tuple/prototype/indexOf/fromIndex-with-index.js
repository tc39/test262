// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Tuple.prototype.indexOf match on the first element, a middle element and the last element when 'fromIndex' is passed
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

assert.sameValue(#[0, 1, 2, 3, 4].indexOf(0, 0), 0, '#[0, 1, 2, 3, 4].indexOf(0, 0)');
assert.sameValue(#[0, 1, 2, 3, 4].indexOf(2, 1), 2, '#[0, 1, 2, 3, 4].indexOf(2, 1)');
assert.sameValue(#[0, 1, 2, 3, 4].indexOf(2, 2), 2, '#[0, 1, 2, 3, 4].indexOf(2, 2)');
assert.sameValue(#[0, 1, 2, 3, 4].indexOf(4, 2), 4, '#[0, 1, 2, 3, 4].indexOf(4, 2)');
assert.sameValue(#[0, 1, 2, 3, 4].indexOf(4, 4), 4, '#[0, 1, 2, 3, 4].indexOf(4, 4)');


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
var tup = Tuple(1, 2, 10n ** 100n, Tuple(5, 6));

assert.sameValue(tup[0], 1);
assert.sameValue(tup[1], 2);
assert.sameValue(tup[2], 10n ** 100n);
assert.sameValue(typeof tup[3], "tuple");
assert.sameValue(tup[3][0], 5);
assert.sameValue(tup[3][1], 6);

assert.sameValue(Object(tup)[0], 1);

assert.sameValue(tup.length, 4);
assert.sameValue(Object(tup).length, 4);

assert.sameValue("0" in Object(tup), true);


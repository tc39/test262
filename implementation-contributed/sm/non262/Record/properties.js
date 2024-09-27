// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
var rec = Record({
  x: 1,
  4: 2,
  z: 10n ** 100n,
  w: Record({}),
  n: Tuple(),
  [Symbol.iterator]: 4,
});

assert.sameValue(rec.x, 1);
assert.sameValue(rec[4], 2);
assert.sameValue(rec.z, 10n ** 100n);
assert.sameValue(typeof rec.w, "record");
assert.sameValue(typeof rec.n, "tuple");
assert.sameValue(rec[Symbol.iterator], undefined);
assert.sameValue(rec.hasOwnProperty, undefined);


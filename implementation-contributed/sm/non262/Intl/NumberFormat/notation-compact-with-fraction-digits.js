// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-NumberFormat-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
let nf = new Intl.NumberFormat("en", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  notation: "compact",
});

assert.sameValue(nf.format(1500), "1.5K");
assert.sameValue(nf.format(1520), "1.52K");
assert.sameValue(nf.format(1540), "1.54K");
assert.sameValue(nf.format(1550), "1.55K");
assert.sameValue(nf.format(1560), "1.56K");
assert.sameValue(nf.format(1580), "1.58K");


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
let nf1 = new Intl.NumberFormat("en", {useGrouping: "true"});
assert.sameValue(nf1.format(1000), "1,000");

let nf2 = new Intl.NumberFormat("en", {useGrouping: "false"});
assert.sameValue(nf2.format(1000), "1,000");


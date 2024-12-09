// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const iter = [1, 3, 5].values();
const fn = (value) => value % 2 == 0;

assert.sameValue(iter.some(fn), false);

assert.sameValue([].values().some(x => x), false);


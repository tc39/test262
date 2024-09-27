// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
async function* gen() {}
gen().toArray().then(array => {
  assert.sameValue(Array.isArray(array), true);
  assert.sameValue(array.length, 0);
});


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
async function* gen() {
  yield 1;
  yield 3;
  yield 5;
}
const fn = x => x % 2 == 0;

gen().some(fn).then(result => assert.sameValue(result, false));

async function* empty() {}
empty().some(x => x).then(result => assert.sameValue(result, false));


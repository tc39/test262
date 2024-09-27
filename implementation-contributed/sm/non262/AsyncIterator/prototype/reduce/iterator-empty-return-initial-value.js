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
const reducer = (x, y) => 0;
async function *gen() {}

gen().reduce(reducer, 1).then(result => assert.sameValue(result, 1));


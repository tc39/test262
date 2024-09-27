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
const log = [];
async function* gen(n) {
  log.push(`${n}`);
  yield 1;
  log.push(`${n}`);
  yield 2;
}

Promise.all([gen(1).find(() => {}), gen(2).find(() => {})]).then(
  () => {
    assert.sameValue(
      log.join(' '),
      '1 2 1 2',
    );
  },
  err => {
    throw err;
  }
);


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
async function *gen() {
  yield 1;
}

function check(fn) {
  gen().every(fn).then(() => {
    throw new Error('every should have thrown');
  },
  (err) => {
    assert.sameValue(err instanceof TypeError, true);
  });
}

check();
check(undefined);
check(null);
check(0);
check(false);
check('');
check(Symbol(''));
check({});


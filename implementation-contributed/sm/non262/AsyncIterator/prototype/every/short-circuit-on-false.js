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
  yield 2;
  yield 3;
}

const log = [];
const fn = value => {
  log.push(value.toString());
  return value % 2 == 1;
};

gen().every(fn).then(result => {
  assert.sameValue(result, false);
  assert.sameValue(log.join(','), '1,2');
});


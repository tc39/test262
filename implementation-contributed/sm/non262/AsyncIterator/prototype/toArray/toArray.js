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
assert.sameValue(Array.isArray(gen()), false);

gen().toArray().then(array => {
  assert.sameValue(Array.isArray(array), true);
  assert.sameValue(array.length, 3);

  const expected = [1, 2, 3];
  for (const item of array) {
    const expect = expected.shift();
    assert.sameValue(item, expect);
  }
});


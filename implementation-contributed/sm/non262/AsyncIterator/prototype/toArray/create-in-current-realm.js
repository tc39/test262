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
const otherGlobal = newGlobal({newCompartment: true});

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().toArray().then(array => {
  assert.sameValue(array instanceof Array, true);
  assert.sameValue(array instanceof otherGlobal.Array, false);
});

otherGlobal.AsyncIterator.prototype.toArray.call(gen()).then(array => {
  assert.sameValue(array instanceof Array, false);
  assert.sameValue(array instanceof otherGlobal.Array, true);
});


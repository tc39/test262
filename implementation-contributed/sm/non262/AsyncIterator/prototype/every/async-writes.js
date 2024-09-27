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
let x = {a: () => true};

async function* gen() {
  yield x.a();
  yield x.a();
}

gen().every(() => true).then(
  () => assert.sameValue(true, false, 'expected error'),
  err => assert.sameValue(err instanceof Error, true),
);

x.a = () => {
  throw Error();
};


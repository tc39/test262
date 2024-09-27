// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-fields-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var await = 1;

async function getClass() {
  return class {
    x = await;
  };
}

getClass().then(cl => {
  assert.sameValue(new cl().x, 1);
});

assert.sameValue(raisesException(SyntaxError)(`
async () => class { [await] = 1 };
`), true);

assert.sameValue(raisesException(SyntaxError)(`
  async () => class { x = await 1 };
`), true);


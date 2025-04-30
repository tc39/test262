// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  await outside of async function should provide better error
esid: pending
---*/

let caught = false;
try {
    eval("await 10");
} catch(e) {
    assert.sameValue(e.message.includes("await is only valid in"), true);
    caught = true;
}
assert.sameValue(caught, true);

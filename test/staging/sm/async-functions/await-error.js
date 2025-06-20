// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  await outside of async function should provide better error
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval("await 10");
});

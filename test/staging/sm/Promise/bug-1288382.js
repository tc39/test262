// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// This just shouldn't trigger a failed assert.
// It does without bug 1288382 fixed.
Promise.all.call(class {
  constructor(exec){ exec(()=>{}, ()=>{}); }
  static resolve() { return {then(){}}; }
}, [null]);


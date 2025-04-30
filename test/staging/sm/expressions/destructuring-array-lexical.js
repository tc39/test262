// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Array destructuring with accessing uninitialized lexical binding.
esid: pending
---*/

assert.throws(ReferenceError, () => { let y = [y] = []; });
assert.throws(ReferenceError, () => { let y = [y] = [,]; });

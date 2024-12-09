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
/* Check we can delete arguments in the global space. */
arguments = 42;
assert.sameValue(delete arguments, true, "arguments defined as global");


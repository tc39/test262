// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  RegExp constructor should check the pattern syntax again when adding unicode flag.
esid: pending
---*/

assert.throws(SyntaxError, () => RegExp(/\-/, "u"));

// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  RegExp constructor should check the pattern syntax again when adding unicode flag.
esid: pending
---*/

assert.throws(SyntaxError, () => RegExp(/\-/, "u"));

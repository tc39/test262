// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Computed Property Names
esid: pending
---*/

var key = "z";
var { [key]: foo } = { z: "bar" };
assert.sameValue(foo, "bar");

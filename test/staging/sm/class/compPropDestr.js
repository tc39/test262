// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  Computed Property Names
esid: pending
---*/

var key = "z";
var { [key]: foo } = { z: "bar" };
assert.sameValue(foo, "bar");

// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var sample = #[40,41,42,43];

assert.sameValue(sample.slice(-0), sample);
assert.sameValue(sample.slice(-0, 4), sample);
assert.sameValue(sample.slice(0, -0), #[]);
assert.sameValue(sample.slice(-0, -0), #[]);


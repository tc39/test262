// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.includes
description: |
  handle Infinity values for fromIndex
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
---*/

var sample = #[42, 43, 43, 41];

assert.sameValue(
  sample.includes(43, Infinity),
  false,
  "includes(43, Infinity)"
);
assert.sameValue(
  sample.includes(43, -Infinity),
  true,
  "includes(43, -Infinity)"
);


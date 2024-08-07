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
---*/var sample = #[1,2,3];

assertThrowsInstanceOf(() => sample.map(function () { throw new TypeError("monkeys"); }),
                       TypeError,
                       "should throw TypeError: monkeys");


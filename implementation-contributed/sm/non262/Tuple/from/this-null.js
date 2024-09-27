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
// this = null or undefined should not throw
var result = Tuple.from.call(null, #[]);

assert.sameValue(result, #[]);
result = Tuple.from.call(undefined, #[]);
assert.sameValue(result, #[]);
result = Tuple.from.call({}, #[]);
assert.sameValue(result, #[]);
result = Tuple.from.call(5, #[]);
assert.sameValue(result, #[]);


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
---*//*
10.2 ECMAScript Function Objects
...
All ECMAScript function objects have the [[Call]] internal method defined here. ECMAScript functions that are also constructors in addition have the [[Construct]] internal method.
*/

assert.sameValue(Tuple.call(), #[]);
assert.sameValue(Tuple.call(undefined), #[]);
assert.sameValue(Tuple.call(undefined, 1), #[1]);
assert.sameValue(Tuple.call(2, 1), #[1]);
assert.sameValue(Tuple.call(#[], 1), #[1]);
assert.sameValue(Tuple.call(undefined, 1, 2, 3), #[1,2,3]);
assert.sameValue(Tuple.call(6, 1, 2, 3), #[1,2,3]);
assert.sameValue(Tuple.call(#[1], 1, 2, 3), #[1,2,3]);


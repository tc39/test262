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
---*//* Tuples should have a length ownProperty that can't be overridden, which will
 * be read by any built-in methods called on Tuples.
 * This test is expected to fail until the spec change in
 * https://github.com/tc39/proposal-record-tuple/issues/282 is implemented.
 */

/*
t = #[1,2,3];
Object.defineProperty(Tuple.prototype, "length", {value: 0});
assert.sameValue(t.includes(2), true);
*/


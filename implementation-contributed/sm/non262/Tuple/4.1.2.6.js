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
/*
4.1.2.6 [[Set]] ( P, Receiver )
The [[Set]] internal method of a Tuple exotic object takes arguments P and Receiver. It performs the following steps when called:

1. Assert: IsPropertyKey(P) is true.
2. Return false.
*/

// Setting properties should have no effect
var t = #[1];
t[4294967295] = "not a tuple element";
assert.sameValue(t[4294967295], undefined);
assert.sameValue(t.length, 1);
t[1] = 5;
assert.sameValue(t.length, 1);


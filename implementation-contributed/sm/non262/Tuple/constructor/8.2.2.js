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
8.2.2 Properties of the Tuple Constructor
The Tuple constructor:

has a [[Prototype]] internal slot whose value is %Function.prototype%.
*/
assert.sameValue(Object.getPrototypeOf(Tuple), Function.prototype);


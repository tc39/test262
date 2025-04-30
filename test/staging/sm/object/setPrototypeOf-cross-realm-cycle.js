// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
// The cycle check in 9.1.2 [[SetPrototypeOf]] prevents cross-realm cycles
// involving only ordinary objects.

var gw = createNewGlobal();

var obj = {};
var w = gw.Object.create(obj);
assert.throws(TypeError, () => Object.setPrototypeOf(obj, w));
assert.throws(gw.TypeError, () => gw.Object.setPrototypeOf(obj, w));


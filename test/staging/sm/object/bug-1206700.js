// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-object-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var x = {};
Reflect.set(x, "prop", 5, Object.prototype);
var y = {};
Reflect.set(y, "prop", 6, Object.prototype);
assert.sameValue(x.hasOwnProperty("prop"), false);
assert.sameValue(y.hasOwnProperty("prop"), false);
assert.sameValue(Object.prototype.hasOwnProperty("prop"), true);
assert.sameValue(Object.prototype.prop, 6);


// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  `name` property of Iterator.prototype.reduce.
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- iterator-helpers
info: |
  Iterator is not enabled unconditionally
esid: pending
---*/
const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.reduce, 'name');
assert.sameValue(propDesc.value, 'reduce');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);


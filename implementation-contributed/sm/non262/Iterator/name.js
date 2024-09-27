// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  The "name" property of Iterator

    Iterator is not enabled unconditionally
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(Iterator, 'name');
assert.sameValue(propDesc.value, 'Iterator');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);


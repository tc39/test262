// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  The "length" property of AsyncIterator

    AsyncIterator is not enabled unconditionally
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator, 'length');
assert.sameValue(propDesc.value, 0);
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);


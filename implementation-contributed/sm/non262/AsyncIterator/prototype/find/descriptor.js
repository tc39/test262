// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  Descriptor property of AsyncIterator.prototype.find
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

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype, 'find');
assert.sameValue(typeof propDesc.value, 'function');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);


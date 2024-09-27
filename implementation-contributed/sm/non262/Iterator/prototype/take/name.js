// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
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

assert.sameValue(Iterator.prototype.take.name, 'take');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.take, 'name');
assert.sameValue(propertyDescriptor.value, 'take');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);


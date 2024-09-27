// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

//

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

assert.sameValue(Iterator.prototype.flatMap.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.flatMap, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);


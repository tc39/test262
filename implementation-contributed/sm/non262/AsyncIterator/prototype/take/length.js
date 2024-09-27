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
- AsyncIterator
description: |
  pending
esid: pending
---*/

assert.sameValue(AsyncIterator.prototype.take.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.take, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);


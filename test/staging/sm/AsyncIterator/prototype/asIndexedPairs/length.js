// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: |
  %AsyncIterator.prototype%.asIndexedPairs length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
features:
- async-iteration
- iterator-helpers
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
---*/
//

assert.sameValue(AsyncIterator.prototype.asIndexedPairs.length, 0);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.asIndexedPairs, 'length');
assert.sameValue(propertyDescriptor.value, 0);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);


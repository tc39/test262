// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
  Iterator.from throws when called with an object with a non-callable @@iterator property.

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

assertThrowsInstanceOf(() => Iterator.from({ [Symbol.iterator]: 0 }), TypeError);
assertThrowsInstanceOf(() => Iterator.from({ [Symbol.iterator]: false }), TypeError);
assertThrowsInstanceOf(() => Iterator.from({ [Symbol.iterator]: "" }), TypeError);
assertThrowsInstanceOf(() => Iterator.from({ [Symbol.iterator]: {} }), TypeError);
assertThrowsInstanceOf(() => Iterator.from({ [Symbol.iterator]: Symbol('') }), TypeError);


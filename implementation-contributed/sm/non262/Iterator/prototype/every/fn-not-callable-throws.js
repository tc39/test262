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
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const iter = [].values();

assertThrowsInstanceOf(() => iter.every(), TypeError);
assertThrowsInstanceOf(() => iter.every(undefined), TypeError);
assertThrowsInstanceOf(() => iter.every(null), TypeError);
assertThrowsInstanceOf(() => iter.every(0), TypeError);
assertThrowsInstanceOf(() => iter.every(false), TypeError);
assertThrowsInstanceOf(() => iter.every(''), TypeError);
assertThrowsInstanceOf(() => iter.every(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.every({}), TypeError);


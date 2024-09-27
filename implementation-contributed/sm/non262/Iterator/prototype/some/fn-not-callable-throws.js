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

assertThrowsInstanceOf(() => iter.some(), TypeError);
assertThrowsInstanceOf(() => iter.some(undefined), TypeError);
assertThrowsInstanceOf(() => iter.some(null), TypeError);
assertThrowsInstanceOf(() => iter.some(0), TypeError);
assertThrowsInstanceOf(() => iter.some(false), TypeError);
assertThrowsInstanceOf(() => iter.some(''), TypeError);
assertThrowsInstanceOf(() => iter.some(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.some({}), TypeError);


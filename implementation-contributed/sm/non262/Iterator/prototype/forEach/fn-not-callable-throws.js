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

assertThrowsInstanceOf(() => iter.forEach(), TypeError);
assertThrowsInstanceOf(() => iter.forEach(undefined), TypeError);
assertThrowsInstanceOf(() => iter.forEach(null), TypeError);
assertThrowsInstanceOf(() => iter.forEach(0), TypeError);
assertThrowsInstanceOf(() => iter.forEach(false), TypeError);
assertThrowsInstanceOf(() => iter.forEach(''), TypeError);
assertThrowsInstanceOf(() => iter.forEach(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.forEach({}), TypeError);


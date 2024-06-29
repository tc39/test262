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
const fn = x => x;
assertThrowsInstanceOf(Iterator.prototype.forEach.bind(undefined, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.forEach.bind({}, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.forEach.bind({next: 0}, fn), TypeError);


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
class TestIterator extends Iterator {
  next() {
    throw new Error();
  }
}

const iter = new TestIterator();

assertThrowsInstanceOf(() => iter.toArray(), Error);


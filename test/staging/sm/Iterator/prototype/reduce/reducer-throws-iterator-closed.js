// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

class TestIterator extends Iterator {
  next() {
    return { done: this.closed, value: undefined };
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const reducer = (x, y) => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assertThrowsInstanceOf(() => iter.reduce(reducer), Error);
assert.sameValue(iter.closed, true);


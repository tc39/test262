// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


//
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

class TestIterator extends Iterator {
  next() {
    return {done: false, value: 0};
  }

  closed = false;
  return() {
    this.closed = true;
    return {done: true};
  }
}

class TestError extends Error {}
class InnerIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new TestError();
      },
    };
  }
}

const iter = new TestIterator();
const mapped = iter.flatMap(x => new InnerIterator());

assert.sameValue(iter.closed, false);
assertThrowsInstanceOf(() => mapped.next(), TestError);
assert.sameValue(iter.closed, true);


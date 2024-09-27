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

class InvalidIterable {
  [Symbol.iterator]() {
    return {};
  }
}

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

const nonIterables = [
  new InvalidIterable(),
  undefined,
  null,
  0,
  false,
  Symbol(''),
  0n,
  {},
];

for (const value of nonIterables) {
  const iter = new TestIterator();
  const mapped = iter.flatMap(x => value);

  assert.sameValue(iter.closed, false);
  assertThrowsInstanceOf(() => mapped.next(), TypeError);
  assert.sameValue(iter.closed, true);
}


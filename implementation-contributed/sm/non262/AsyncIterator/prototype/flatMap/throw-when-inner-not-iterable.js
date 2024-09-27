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
- AsyncIterator
description: |
  pending
esid: pending
---*/

class NotIterable {
  async next() {
    return {done: true};
  }
}

class InvalidIterable {
  [Symbol.asyncIterator]() {
    return {};
  }
}

class TestIterator extends AsyncIterator {
  async next() {
    return {done: false, value: 0};
  }

  closed = false;
  async return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

const nonIterables = [
  new NotIterable(),
  new InvalidIterable(),
  undefined,
  null,
  0,
  false,
  Symbol(''),
  0n,
  {},
];

(async () => {
  for (const value of nonIterables) {
    const iter = new TestIterator();
    const mapped = iter.flatMap(x => value);

    assert.sameValue(iter.closed, false);
    console.log("here!");
    try {
      await mapped.next();
      assert.sameValue(true, false, 'Expected reject');
    } catch (exc) {
      assert.sameValue(exc instanceof TypeError, true);
    }
    assert.sameValue(iter.closed, true);
  }
})();


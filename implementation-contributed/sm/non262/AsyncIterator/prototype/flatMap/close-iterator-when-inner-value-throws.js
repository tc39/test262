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

class TestIterator extends AsyncIterator {
  async next() {
    return {done: false, value: 0};
  }

  closed = false;
  async return() {
    this.closed = true;
    return {done: true};
  }
}

class TestError extends Error {}
class InnerIterator extends AsyncIterator {
  async next() {
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
mapped.next().then(
  _ => assert.sameValue(true, false, 'Expected reject.'),
  err => {
    assert.sameValue(err instanceof TestError, true);
    assert.sameValue(iter.closed, true);
  }
);


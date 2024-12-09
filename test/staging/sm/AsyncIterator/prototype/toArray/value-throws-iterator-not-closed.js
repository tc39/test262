// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
features:
- async-iteration
description: |
  pending
esid: pending
---*/

class TestError extends Error {}
class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({
      done: false,
      get value() {
        throw new TestError();
      }
    });
  }

  closed = false;
  return() {
    closed = true;
  }
}

const iterator = new TestIterator();
assert.sameValue(iterator.closed, false, 'iterator starts unclosed');
iterator.toArray().then(
  () => {
    throw new Error('toArray should have thrown');
  },
  err => {
    assert.sameValue(err instanceof TestError, true);
    assert.sameValue(iterator.closed, false, 'iterator remains unclosed');
  }
);


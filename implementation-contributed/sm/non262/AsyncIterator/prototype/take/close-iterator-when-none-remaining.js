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
    return {done: false, value: 'value'};
  }

  closed = false;
  async return() {
    this.closed = true;
    return {done: true};
  }
}

const iter = new TestIterator();
const iterTake = iter.take(1);

iterTake.next().then(
  ({done, value}) => {
    assert.sameValue(done, false);
    assert.sameValue(value, 'value');
    assert.sameValue(iter.closed, false);

    iterTake.next().then(
      ({done, value}) => {
        assert.sameValue(done, true);
        assert.sameValue(value, undefined);
        assert.sameValue(iter.closed, true);
      }
    );
  }
);


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
- Iterator
description: |
  pending
esid: pending
---*/

class TestIterator extends AsyncIterator {
  counter = 0;
  async next() {
    return {done: ++this.counter >= 2, value: undefined};
  }
}

(async () => {
  let iter = [1, 2].values().drop(3);
  let result = await iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);

  iter = new TestIterator();
  let dropped = iter.drop(10);
  result = await dropped.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
  assert.sameValue(iter.counter, 2);
})();


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
    return {done: false, value: 1};
  }

  closed = false;
  return() {
    this.closed = true;
    return {done: true};
  }
}

const iter = new TestIterator();
const iterTake = iter.take(1);

let result = iterTake.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 1);
assert.sameValue(iter.closed, false);

result = iterTake.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);
assert.sameValue(iter.closed, true);


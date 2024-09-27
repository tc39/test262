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

let iter = [1, 2].values().take(3);
for (const expected of [1, 2]) {
  const result = iter.next();
  assert.sameValue(result.value, expected);
  assert.sameValue(result.done, false);
}
let result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

class TestIterator extends Iterator {
  counter = 0;
  next() {
    return {done: ++this.counter >= 2, value: undefined};
  }

  closed = false;
  return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

iter = new TestIterator();
let taken = iter.take(10);
for (const value of taken) {
  assert.sameValue(value, undefined);
}
result = taken.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.sameValue(iter.counter, 2);
assert.sameValue(iter.closed, false);


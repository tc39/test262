// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Returns abrupt when return accessor is abrupt.
info: |
  %Iterator.prototype%.drop ( limit )

features: [iterator-helpers]
flags: []
---*/
let yieldCount = 0;

function* g() {
  yieldCount++;
  yield 1;
  yieldCount++;
  yield 2;
}

let iterator = g().drop(1);
let proto = Object.getPrototypeOf(iterator);
let returnCount = 0;

Object.defineProperty(proto, 'return', {
  get() {
    returnCount++;
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function () {
  iterator.return();
});

let {
  value,
  done
} = iterator.next();

assert.sameValue(value, 2, 'The value of `value` is 2');
assert.sameValue(done, false, 'The value of `done` is false');
assert.sameValue(yieldCount, 2, 'The value of `yieldCount` is 2');
assert.sameValue(returnCount, 1, 'The value of `returnCount` is 1');

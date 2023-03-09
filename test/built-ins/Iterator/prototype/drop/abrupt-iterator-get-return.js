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
}

let iterator = g().drop(0);
let proto = Object.getPrototypeOf(iterator);
let returnCount = 0;

Object.defineProperty(proto, 'return', {
  get() {
    returnCount++;
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function () {
  iterator.next();
  iterator.return();
});

assert.sameValue(yieldCount, 1, 'The value of `yieldCount` is 1');
assert.sameValue(returnCount, 1, 'The value of `returnCount` is 1');

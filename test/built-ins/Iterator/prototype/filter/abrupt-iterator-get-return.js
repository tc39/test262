// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Returns abrupt when return accessor is abrupt.
info: |
  %Iterator.prototype%.filter ( limit )

features: [iterator-helpers]
flags: []
---*/
let yieldCount = 0;

function* g() {
  yieldCount++;
}

let iterator = g().filter(() => true);
let proto = Object.getPrototypeOf(iterator);
let returnGets = 0;

Object.defineProperty(proto, 'return', {
  get() {
    returnGets++;
    throw new Test262Error();
  }
});

iterator.next();
assert.throws(Test262Error, function () {
  iterator.return();
});

assert.sameValue(yieldCount, 1, 'The value of `yieldCount` is 1');
assert.sameValue(returnGets, 1, 'The value of `returnGets` is 1');

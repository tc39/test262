// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Returns abrupt when return call is abrupt.
info: |
  %Iterator.prototype%.filter ( filterer )

features: [iterator-helpers]
flags: []
---*/
let yieldCount = 0;

function* g() {
  yieldCount++;
  yield 1;
  throw new Test262Error();
}

let callbackCount = 0;

let iterator = g().filter(() => {
  callbackCount++;
  return true;
});

iterator.next();
assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(yieldCount, 1, 'The value of `yieldCount` is 1');
assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Returns abrupt when return call is abrupt.
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
  throw new Test262Error();
}

let iterator = g().drop(0);
let forCount = 0;

assert.throws(Test262Error, function () {
  for (const v of iterator) {
    forCount++;
  }
});

let {
  value,
  done
} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
assert.sameValue(yieldCount, 2, 'The value of `yieldCount` is 2');
assert.sameValue(forCount, 1, 'The value of `forCount` is 1');

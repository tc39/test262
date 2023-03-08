// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Returns abrupt when return call is abrupt.
info: |
  %Iterator.prototype%.every ( fn )

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

let callbackCount = 0;
let iterator = g();

assert.sameValue(yieldCount, 0, 'The value of `yieldCount` is 0');

assert.throws(Test262Error, function() {
  iterator.every(() => {
    callbackCount++;
    return true;
  });
});

assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');
assert.sameValue(yieldCount, 2, 'The value of `yieldCount` is 2');

let {
  value,
  done
} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
assert.sameValue(yieldCount, 2, 'The value of `yieldCount` is 2');

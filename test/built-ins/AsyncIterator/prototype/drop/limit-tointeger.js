// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Coerces limit argument to an integer
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let remaining be ? ToInteger(limit).

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIterator([1, 2, 3, 4]);
  let limit = {
    valueOf() {
      count++;
      return 1;
    }
  };

  let {value, done} = await iterator.drop(limit).next();

  assert.sameValue(value, 2, 'The value of `value` is 2');
  assert.sameValue(done, false, 'The value of `done` is false');

  // 1 calls from drop() and 1 call from next()
  assert.sameValue(iterator.nextCalls, 2, 'The value of iterator.nextCalls is 2');
  assert.sameValue(count, 1, 'The value of `count` is 1');
})().then($DONE, $DONE);


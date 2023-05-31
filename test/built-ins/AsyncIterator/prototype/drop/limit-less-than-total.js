// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Removes entries from this iterator, specified by limit argument.
info: |
  %AsyncIterator.prototype%.drop ( limit )

  %AsyncIterator.prototype%.drop is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).
    Let remaining be ? ToInteger(limit).
    If remaining < 0, throw a RangeError exception.

  The body of %AsyncIterator.prototype%.drop is composed of the following steps:

    Repeat, while remaining > 0,
      Set remaining to remaining - 1.
      Let next be ? Await(? IteratorNext(iterated)).
      If ? IteratorComplete(next) is true, return undefined.
    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated, lastValue)).
      If ? IteratorComplete(next) is true, return undefined.
      Set lastValue to Yield(? IteratorValue(next)).
      IfAbruptCloseAsyncIterator(iterated, lastValue).

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/

(async () => {
  let iterator = new Test262AsyncIterator([1, 2, 3, 4]);

  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');

  let {value, done} = await iterator.drop(2).next();

  assert.sameValue(value, 3, 'The value of `value` is 3');
  assert.sameValue(done, false, 'The value of `done` is false');
  // 2 calls from drop() and 1 call from next()
  assert.sameValue(iterator.nextCalls, 3, 'The value of iterator.nextCalls is 3');
  assert.sameValue(iterator.iterable.length, 1, 'The value of iterator.iterable.length is 1');
})().then($DONE, $DONE);

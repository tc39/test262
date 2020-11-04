// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  Returns abrupt when return accessor is abrupt.
info: |
  %AsyncIterator.prototype%.filter ( limit )

  %AsyncIterator.prototype%.filter is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).
    Let remaining be ? ToInteger(limit).
    If remaining < 0, throw a RangeError exception.

  The body of %AsyncIterator.prototype%.filter is composed of the following steps:

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
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  get return() {
    throw new Test262Error();
  }
}

(async () => {
  let catchCount = 0;
  let iterator = new Test262AsyncIteratorAbrupt([1, 2, 3, 4]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');

  try {
    await iterator.filter(() => true);
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(iterator.nextCalls, 1, 'The value of iterator.nextCalls is 1');
  assert.sameValue(iterator.iterable.length, 3, 'The value of iterator.iterable.length is 3');
})().then($DONE, $DONE);

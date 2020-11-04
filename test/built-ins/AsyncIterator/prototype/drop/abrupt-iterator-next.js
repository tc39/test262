// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.drop
description: >
  Returns abrupt when next call is abrupt.
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

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    throw new Test262Error();
  }
}

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIteratorAbrupt([0, 1, 2, 3]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
  let indexedPairs = iterator.drop();

  try {
    count++;

    for await (const [i, v] of indexedPairs) {
      $DONE('for await body must not be reachable');
    }
  } catch (e) {
    count++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
  assert.sameValue(iterator.iterable.length, 4, 'The value of iterator.iterable.length is 4');
})().then($DONE, $DONE);

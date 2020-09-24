// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Creates an iterator whose values are an array containing the index and item value.
info: |
  %AsyncIterator.prototype%.asIndexedPairs ( )

  %AsyncIterator.prototype%.asIndexedPairs is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).

  The body of %AsyncIterator.prototype%.asIndexedPairs is composed of the following steps:

    Let index be 0.
    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated, lastValue)).
      If ? IteratorComplete(next) is true, return undefined.
      Let value be ? IteratorValue(next).
      Let pair be ! CreateArrayFromList(« index, value »).
      Set index to index + 1.
      Set lastValue to Yield(pair).
      IfAbruptCloseAsyncIterator(iterated, lastValue).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
(async () => {
  let iterator = new Test262AsyncIterator([0, 1, 2, 3]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
  let indexedPairs = iterator.asIndexedPairs();

  for await (const [i, v] of indexedPairs) {
    assert.sameValue(i, v, 'The value of `i` is expected to equal the value of v');
  }

  assert.sameValue(iterator.nextCalls, 5, 'The value of iterator.nextCalls is 5');
  assert.sameValue(iterator.iterable.length, 0, 'The value of iterator.iterable.length is 0');
})().then($DONE, $DONE);

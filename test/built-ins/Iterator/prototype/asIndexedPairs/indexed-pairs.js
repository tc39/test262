// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Creates an iterator whose values are an array containing the index and item value.
info: |
  %AsyncIterator.prototype%.asIndexedPairs ( )

  Let iterated be ? GetIteratorDirect(this value).
  Let closure be a new Abstract Closure with no parameters that captures iterated and performs the following steps when called:
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
  Return ? CreateAsyncIteratorFromClosure(closure, Async Iterator Helper, %AsyncIteratorHelperPrototype%).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
(async () => {
  let iterator = new Test262AsyncIterator([0, 1]);
  let indexedPairs = iterator.asIndexedPairs();

  for await (const [i, v] of indexedPairs) {
    assert.sameValue(i, v, 'The value of `i` is expected to equal the value of v');
  }
})().then($DONE, $DONE);

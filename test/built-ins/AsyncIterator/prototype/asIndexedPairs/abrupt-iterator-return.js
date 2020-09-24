// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Returns abrupt when return call is abrupt.
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


features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let genCount = 0;

async function* g() {
  genCount++;
  yield 1;
  genCount++;
  throw new Test262Error();
}

(async () => {
  let iterator = g().asIndexedPairs();
  let tryCount = 0;
  let catchCount = 0;
  let forAwaitCount = 0;

  try {
    tryCount++;

    for await (const [i, v] of iterator) {
      forAwaitCount++;
    }

    tryCount++;
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(genCount, 2, 'The value of `genCount` is 2');
  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(forAwaitCount, 1, 'The value of `forAwaitCount` is 1');
})().then($DONE, $DONE);

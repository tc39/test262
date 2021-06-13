// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Returns abrupt when return accessor is abrupt.
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
  ...

features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let yieldCount = 0;

async function* g() {
  yieldCount++;
}

(async () => {
  let iterator = g().asIndexedPairs();
  let proto = Object.getPrototypeOf(iterator);
  let tryCount = 0;
  let catchCount = 0;
  let returnCount = 0;

  Object.defineProperty(proto, 'return', {
    get() {
      returnCount++;
      throw new Test262Error();
    }
  });

  try {
    tryCount++;
    await iterator.next();
    await iterator.return();
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(yieldCount, 1, 'The value of `yieldCount` is 1');
  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(returnCount, 1, 'The value of `returnCount` is 1');
})().then($DONE, $DONE);

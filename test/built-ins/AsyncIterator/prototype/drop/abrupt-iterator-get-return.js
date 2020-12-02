// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.drop
description: >
  Returns abrupt when return accessor is abrupt.
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let iterated be ? GetIteratorDirect(this value).
  Let remaining be ? ToInteger(limit).
  If remaining < 0, throw a RangeError exception.
  Let closure be a new Abstract Closure with no parameters that captures iterated and remaining and performs the following steps when called:
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
      ...

features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let yieldCount = 0;

async function* g() {
  yieldCount++;
}

(async () => {
  let iterator = await g().drop(0);
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

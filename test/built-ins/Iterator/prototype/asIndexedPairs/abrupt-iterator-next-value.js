// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  Returns abrupt when value accessor is abrupt.
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
      ...

  IteratorValue ( iterResult )

    Return ? Get(iterResult, "value").

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let nextCalls = 0;
let valueCount = 0;

class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    nextCalls++;

    return {
      get value() {
        valueCount++;
        throw new Test262Error();
      }
    };
  }
}

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIteratorAbrupt([1, 2]);
  let indexedPairs = iterator.asIndexedPairs();

  try {
    count++;

    for await (const [i, v] of indexedPairs) {
      $DONE('for await body must not be reachable');
    }
  } catch (e) {
    count++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');
  assert.sameValue(valueCount, 1, 'The value of `valueCount` is 1');
})().then($DONE, $DONE);

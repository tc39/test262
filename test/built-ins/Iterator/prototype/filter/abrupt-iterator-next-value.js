// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  Returns abrupt when value accessor is abrupt.
info: |
  %AsyncIterator.prototype%.filter ( filterer )

  %AsyncIterator.prototype%.filter is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).
    If IsCallable(filterer) is false, throw a TypeError exception.

  The body of %AsyncIterator.prototype%.filter is composed of the following steps:

    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(value, lastValue)).
      If ? IteratorComplete(next) is true, return undefined.
      Let value be ? IteratorValue(next).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let valueGets = 0;
let nextCalls = 0;
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    nextCalls++;
    return {
      done: false,
      get value() {
        valueGets++;
        throw new Test262Error();
      }
    };
  }
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let iterator = (new Test262AsyncIteratorAbrupt([1, 2])).filter(() => true);
  assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

  try {
    tryCount++;
    await iterator.next();
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(valueGets, 1, 'The value of `valueGets` is 1');
  assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');
})().then($DONE, $DONE);

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.drop
description: >
  Returns abrupt when next call is abrupt.
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

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let nextCalls = 0;
let returnCalls = 0;
let rejection = new Test262Error();
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    nextCalls++;
    return Promise.reject(rejection);
  }
  async return() {
    await super.return();
    returnCalls++;
  }
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let iterator = new Test262AsyncIteratorAbrupt([1, 2]).drop(0);
  assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

  try {
    tryCount++;
    await iterator.next();
  } catch (e) {
    catchCount++;
    assert.sameValue(e, rejection, 'The value of `e` is expected to equal the value of rejection');
  }
  let {value, done} = await iterator.next();
  assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
  assert.sameValue(done, true, 'The value of `done` is true');
  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');
})().then($DONE, $DONE);

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.find
description: >
  Returns abrupt when done accessor is abrupt.
info: |
  %AsyncIterator.prototype%.find ( fn )

    Let iterated be ? GetIteratorDirect(this value).
    If IsCallable(fn) is false, throw a TypeError exception.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated)).
      If ? IteratorComplete(next) is true, return undefined.
      Let value be ? IteratorValue(next).
      Let result be Call(fn, undefined, « value »).
      IfAbruptCloseAsyncIterator(iterated, result).
      Set result to Await(result).
      IfAbruptCloseAsyncIterator(iterated, result).
      If ! ToBoolean(result) is true, return ? AsyncIteratorClose(iterated, NormalCompletion(value)).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let doneGets = 0;
let nextCalls = 0;
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    nextCalls++;
    return {
      get done() {
        doneGets++;
        throw new Test262Error();
      },

      value: 1
    };
  }
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let iterator = (new Test262AsyncIteratorAbrupt([1, 2]));
  assert.sameValue(nextCalls, 0, 'The value of `nextCalls` is 0');

  try {
    tryCount++;

    await iterator.find(() => true);
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(doneGets, 1, 'The value of `doneGets` is 1');
  assert.sameValue(nextCalls, 1, 'The value of `nextCalls` is 1');
})().then($DONE, $DONE);

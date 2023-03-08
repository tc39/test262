// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.find
description: >
  Returns abrupt when return call is abrupt.
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

features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let yieldCount = 0;

async function* g() {
  yieldCount++;
  yield 1;
  throw new Test262Error();
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let callbackCount = 0;
  let iterator = await g();

  try {
    tryCount++;

    await iterator.find(() => {
      callbackCount++;
      return false;
    });
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(yieldCount, 1, 'The value of `yieldCount` is 1');
  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');
})().then($DONE, $DONE);

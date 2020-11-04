// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when return call is abrupt.
info: |
  %AsyncIterator.prototype%.every ( fn )

  %AsyncIterator.prototype%.every is a built-in async function which, when called, performs the following steps:

    Let iterated be ? GetIteratorDirect(this value).
    If IsCallable(fn) is false, throw a TypeError exception.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated)).
      If ? IteratorComplete(next) is true, return true.
      Let value be ? IteratorValue(next).
      Let result be Call(fn, undefined, « value »).
      IfAbruptCloseAsyncIterator(iterated, result).
      Set result to Await(result).
      IfAbruptCloseAsyncIterator(iterated, result).

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
  let tryCount = 0;
  let catchCount = 0;
  let callbackCount = 0;

  try {
    tryCount++;

    await g().every(() => {
      callbackCount++;
      return true;
    });
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');
})().then($DONE, $DONE);

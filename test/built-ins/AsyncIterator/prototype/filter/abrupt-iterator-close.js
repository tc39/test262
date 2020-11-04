// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  Returns abrupt when return call is abrupt.
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
      Let selected be Call(filterer, undefined, « value »).
      IfAbruptCloseAsyncIterator(iterated, selected).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/

(async () => {
  let iterator = new Test262AsyncIterator([1, 2, 3, 4]);
  let tryCount = 0;
  let catchCount = 0;
  let callbackCount = 0;

  try {
    tryCount++;
    let result = await iterator.filter(() => {
      callbackCount++;
      throw new Test262Error();
    });
    throw result;
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

  let {value, done} = await iterator.next();

  assert.sameValue(value, 2, 'The value of `value` is 2');
  assert.sameValue(done, false, 'The value of `done` is false');
})().then($DONE, $DONE);

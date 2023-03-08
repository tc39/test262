// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  Returns abrupt when callback call is abrupt. Closes iterator
info: |
  %AsyncIterator.prototype%.filter ( filterer )

  Let iterated be ? GetIteratorDirect(this value).
  If IsCallable(filterer) is false, throw a TypeError exception.
  Let closure be a new Abstract Closure with no parameters that captures iterated and filterer and performs the following steps when called:
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
  let tryCount = 0;
  let catchCount = 0;
  let callbackCount = 0;
  let iterator = new Test262AsyncIterator([1, 2]).filter(() => {
    callbackCount++;
    throw new Test262Error();
  });

  try {
    tryCount++;
    await iterator.next();
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

  let {value, done} = await iterator.next();

  assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
  assert.sameValue(done, true, 'The value of `done` is true');
})().then($DONE, $DONE);

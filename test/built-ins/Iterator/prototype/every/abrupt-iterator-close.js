// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when callback call is abrupt, does not close iterator.
info: |
  %AsyncIterator.prototype%.every ( fn )

  Let iterated be ? GetIteratorDirect(this value).
  If IsCallable(fn) is false, throw a TypeError exception.
  Repeat,
    Let next be ? Await(? IteratorNext(iterated)).
    If ? IteratorComplete(next) is true, return true.
    Let value be ? IteratorValue(next).
    Let result be Call(fn, undefined, « value »).
    IfAbruptCloseAsyncIterator(iterated, result).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/

(async () => {
  let iterator = new Test262AsyncIterator([1, 2]);
  let tryCount = 0;
  let catchCount = 0;
  let callbackCount = 0;

  try {
    tryCount++;
    await iterator.every(() => {
      callbackCount++;
      throw new Test262Error();
    });
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

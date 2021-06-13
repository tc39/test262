// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when return accessor is abrupt.
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
    Set result to Await(result).
    IfAbruptCloseAsyncIterator(iterated, result).
    If ! ToBoolean(result) is false, return ? AsyncIteratorClose(iterated, NormalCompletion(false)).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let returnGets = 0;
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  get return() {
    returnGets++;
    throw new Test262Error();
  }
}

(async () => {
  let tryCount = 0;
  let catchCount = 0;
  let iterator = new Test262AsyncIteratorAbrupt([1, 2]);
  assert.sameValue(returnGets, 0, 'The value of `returnGets` is 0');

  try {
    tryCount++;
    await iterator.every(() => false);
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }
  assert.sameValue(tryCount, 1, 'The value of `tryCount` is 1');
  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
  assert.sameValue(returnGets, 1, 'The value of `returnGets` is 1');
})().then($DONE, $DONE);

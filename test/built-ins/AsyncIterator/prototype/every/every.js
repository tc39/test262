// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every returns true when the predicate returns false
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
      If ToBoolean(result) is false, return ? AsyncIteratorClose(iterated, NormalCompletion(false)).

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/
(async () => {
  let iterator = new Test262AsyncIterator([1, 2]);
  let result = await iterator.every(value => !!value);

  assert.sameValue(result, true, 'The value of `result` is true');

  let {value, done} = await iterator.next();

  assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
  assert.sameValue(done, true, 'The value of `done` is true');
})().then($DONE, $DONE);

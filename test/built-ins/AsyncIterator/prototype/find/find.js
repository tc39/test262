// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.find
description: >
  AsyncIterator.prototype.find returns only items for which the predicate returned true.
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
features: [iterator-helpers]
flags: [async]
---*/
(async () => {
  let iterator = new Test262AsyncIterator([1, 0, 2, 0, 3, 0, 4]);
  let found = await iterator.find(value => value % 2);

  let {
    value,
    done
  } = await iterator.next();

  assert.sameValue(found, 1, 'The value of `found` is 1');
  assert.sameValue(value, 0, 'The value of `value` is 0');
  assert.sameValue(done, false, 'The value of `done` is false');
})().then($DONE, $DONE);

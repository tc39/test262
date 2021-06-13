// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.filter
description: >
  AsyncIterator.prototype.filter returns only items for which the predicate returned true.
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
      Set selected to Await(selected).
      IfAbruptCloseAsyncIterator(iterated, selected).
      If ToBoolean(selected) is true, then
        Set lastValue to Yield(value).
        IfAbruptCloseAsyncIterator(iterated, lastValue).

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/
(async () => {
  let iterator = new Test262AsyncIterator([1, 0, 2, 0, 3, 0, 4]).filter(value => !!value);
  let check = 1;

  for await (let value of iterator) {
    assert.sameValue(value, check, 'The value of `value` is expected to equal the value of check');
    check++;
  }

  let {
    value,
    done
  } = await iterator.next();

  assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
  assert.sameValue(done, true, 'The value of `done` is true');
})().then($DONE, $DONE);

// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  Removes entries from this iterator, specified by limit argument.
info: |
  %AsyncIterator.prototype%.drop ( limit )

  Let iterated be ? GetIteratorDirect(this value).
  Let remaining be ? ToInteger(limit).
  If remaining < 0, throw a RangeError exception.
  Let closure be a new Abstract Closure with no parameters that captures iterated and remaining and performs the following steps when called:
    Repeat, while remaining > 0,
      Set remaining to remaining - 1.
      Let next be ? Await(? IteratorNext(iterated)).
      If ? IteratorComplete(next) is true, return undefined.
    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated, lastValue)).
      If ? IteratorComplete(next) is true, return undefined.
      Set lastValue to Yield(? IteratorValue(next)).
      IfAbruptCloseAsyncIterator(iterated, lastValue).
      ...

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/

(async () => {
  let iterator = new Test262AsyncIterator([1, 2]).drop(3);
  let {value, done} = await iterator.next();

  assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
  assert.sameValue(done, true, 'The value of `done` is true');
})().then($DONE, $DONE);

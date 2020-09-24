// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when value accessor is abrupt.
info: |
  %AsyncIterator.prototype%.every ( limit )

  %AsyncIterator.prototype%.every is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).
    Let remaining be ? ToInteger(limit).
    If remaining < 0, throw a RangeError exception.

  The body of %AsyncIterator.prototype%.every is composed of the following steps:

    Repeat, while remaining > 0,
      Set remaining to remaining - 1.
      Let next be ? Await(? IteratorNext(iterated)).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
let valueCount = 0;

class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    this.nextCalls++;

    return {
      get value() {
        valueCount++;
        throw new Test262Error();
      }
    };
  }
}

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIteratorAbrupt([0, 1, 2, 3]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');

  try {
    count++;
    await iterator.every(v => v);
  } catch (e) {
    count++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(valueCount, 1, 'The value of `valueCount` is 1');
  assert.sameValue(iterator.nextCalls, 1, 'The value of iterator.nextCalls is 1');
  assert.sameValue(iterator.iterable.length, 4, 'The value of iterator.iterable.length is 4');
})().then($DONE, $DONE);

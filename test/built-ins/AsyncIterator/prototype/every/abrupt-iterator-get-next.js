// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when next accessor is abrupt.
info: |
  %AsyncIterator.prototype%.every ( fn )

  %AsyncIterator.prototype%.every is a built-in async generator function which, when called, performs the following prelude steps:

    Let iterated be ? GetIteratorDirect(this value).

  The body of %AsyncIterator.prototype%.every is composed of the following steps:

    Let index be 0.
    Let lastValue be undefined.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated, lastValue)).
      ...

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  get next() {
    throw new Test262Error();
  }
}

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIteratorAbrupt([0, 1, 2, 3]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');

  try {
    await iterator.every(() => {});
  } catch (e) {
    count++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of evaluating `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(count, 1, 'The value of `count` is 1');
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
  assert.sameValue(iterator.iterable.length, 4, 'The value of iterator.iterable.length is 4');
})().then($DONE, $DONE);

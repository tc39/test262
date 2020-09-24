// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  Returns abrupt when next call is abrupt.
info: |
  %AsyncIterator.prototype%.every ( fn )

  %AsyncIterator.prototype%.every is a built-in async function which, when called, performs the following steps:

    Let iterated be ? GetIteratorDirect(this value).
    If IsCallable(fn) is false, throw a TypeError exception.
    Repeat,
      Let next be ? Await(? IteratorNext(iterated)).

includes: [iterators.js]
features: [async-iteration, iterator-helpers]
flags: [async]
---*/
class Test262AsyncIteratorAbrupt extends Test262AsyncIterator {
  async next() {
    throw new Test262Error();
  }
}

(async () => {
  let count = 0;
  let iterator = new Test262AsyncIteratorAbrupt([0, 1, 2, 3]);
  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');

  try {
    count++;
    await iterator.every(() => true);
  } catch (e) {
    count++;
    assert.sameValue(e instanceof Test262Error, true, 'The result of `(e instanceof Test262Error)` is true');
  }

  assert.sameValue(iterator.nextCalls, 0, 'The value of iterator.nextCalls is 0');
  assert.sameValue(iterator.iterable.length, 4, 'The value of iterator.iterable.length is 4');
})().then($DONE, $DONE);

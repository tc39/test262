// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every expects to be called with a function argument.
info: |
  %AsyncIterator.prototype%.every ( fn )

  Let iterated be ? GetIteratorDirect(this value).
  If IsCallable(fn) is false, throw a TypeError exception.

includes: [iterators.js]
features: [iterator-helpers]
flags: [async]
---*/
(async () => {
  let catchCount = 0;
  let nonCallable = {};
  let iterator = new Test262AsyncIterator([1, 2]);

  try {
    await iterator.every(nonCallable);
  } catch (e) {
    catchCount++;
    assert.sameValue(e instanceof TypeError, true, 'The result of evaluating `(e instanceof TypeError)` is true');
  }

  assert.sameValue(catchCount, 1, 'The value of `catchCount` is 1');
})().then($DONE, $DONE);

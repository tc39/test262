// Copyright (C) 2026 Divy Srivastava. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  The iterator of an asynchronous iterable is not closed when the iterator
  reports it is done.
info: |
  3.j.ii.4.a. If _next_ is *false*, then
    ...
    iii. Return Completion Record { [[Type]]: ~return~, [[Value]]: _A_,
         [[Target]]: ~empty~ }.

  A normal completion of the iteration never calls AsyncIteratorClose, so
  the iterator's return method is not invoked.
flags: [async]
includes: [asyncHelpers.js]
features: [Array.fromAsync]
---*/

let returnCalled = false;
const iterator = {
  i: 0,
  next() {
    return Promise.resolve(
      this.i < 2 ? { value: this.i++, done: false } : { value: undefined, done: true }
    );
  },
  return() {
    returnCalled = true;
    return Promise.resolve({ done: true });
  },
  [Symbol.asyncIterator]() {
    return this;
  }
};

asyncTest(async () => {
  const result = await Array.fromAsync(iterator);
  assert.compareArray(result, [0, 1]);
  assert.sameValue(
    returnCalled,
    false,
    "return() must not be called when the iterator is exhausted"
  );
});

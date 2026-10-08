// Copyright (C) 2026 Divy Srivastava. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  When the mapping function throws and closing the asynchronous iterator
  also fails, the promise returned by Array.fromAsync is rejected with the
  mapping function's error.
info: |
  3.j.ii.6. If _mapping_ is *true*, then
    a. Let _mappedValue_ be Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).
    b. IfAbruptCloseAsyncIterator(_mappedValue_, _iteratorRecord_).

  AsyncIteratorClose ( iteratorRecord, completion )
    5. If _completion_ is a throw completion, return ? _completion_.
flags: [async]
includes: [asyncHelpers.js]
features: [Array.fromAsync]
---*/

let returnCalled = false;
const iterator = {
  next() {
    return Promise.resolve({ value: 1, done: false });
  },
  return() {
    returnCalled = true;
    return Promise.reject(new Error("return rejects"));
  },
  [Symbol.asyncIterator]() {
    return this;
  }
};

asyncTest(async () => {
  await assert.throwsAsync(
    Test262Error,
    () => Array.fromAsync(iterator, () => { throw new Test262Error("mapfn throws"); }),
    "fromAsync must reject with the mapfn error, not the return() rejection"
  );
  assert(returnCalled, "return() should have been called");
});

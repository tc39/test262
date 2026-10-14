// Copyright (C) 2026 Divy Srivastava. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  When the mapping function throws, the promise returned by the asynchronous
  iterator's return method is awaited before the promise returned by
  Array.fromAsync is rejected.
info: |
  3.j.ii.6. If _mapping_ is *true*, then
    a. Let _mappedValue_ be Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).
    b. IfAbruptCloseAsyncIterator(_mappedValue_, _iteratorRecord_).

  AsyncIteratorClose ( iteratorRecord, completion )
    4.d. If _innerResult_ is a normal completion, set _innerResult_ to
         Completion(Await(_innerResult_.[[Value]])).
flags: [async]
includes: [asyncHelpers.js]
features: [Array.fromAsync]
---*/

const order = [];
const iterator = {
  next() {
    return Promise.resolve({ value: 1, done: false });
  },
  return() {
    order.push("return called");
    return new Promise((resolve) => {
      Promise.resolve().then(() => {
        order.push("return settled");
        resolve({ done: true });
      });
    });
  },
  [Symbol.asyncIterator]() {
    return this;
  }
};

asyncTest(async () => {
  await assert.throwsAsync(
    Test262Error,
    () => Array.fromAsync(iterator, () => { throw new Test262Error("mapfn throws"); }),
    "mapfn throwing should cause fromAsync to reject"
  );
  order.push("fromAsync rejected");
  assert.compareArray(order, ["return called", "return settled", "fromAsync rejected"]);
});

// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  The output promise rejects if the asynchronous mapping function rejects.
info: |
  3.j.ii.6. If _mapping_ is *true*, then
    a. Let _mappedValue_ be Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).
    ...
    c. Set _mappedValue_ to Await(_mappedValue_).
    d. IfAbruptCloseAsyncIterator(_mappedValue_, _iteratorRecord_).
flags: [async]
includes: [asyncHelpers.js]
features: [Array.fromAsync]
---*/

asyncTest(async () => {
  await assert.throwsAsync(Test262Error, () => Array.fromAsync([1, 2, 3], async () => {
    throw new Test262Error("mapfn throws");
  }), "async mapfn rejecting should cause fromAsync to reject");
});

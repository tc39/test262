// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  An asynchronous mapping function is applied to each item yielded by an
  asynchronous iterable.
info: |
  3.j.ii.6. If _mapping_ is *true*, then
    a. Let _mappedValue_ be Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).
    ...
    c. Set _mappedValue_ to Await(_mappedValue_).
    ...
  ...
  8. Let _defineStatus_ be CreateDataPropertyOrThrow(_A_, _Pk_, _mappedValue_).
flags: [async]
includes: [asyncHelpers.js, compareArray.js]
features: [Array.fromAsync]
---*/

async function* asyncGen() {
  for (let i = 0; i < 4; i++) {
    yield Promise.resolve(i * 2);
  }
}

async function asyncMap(val, ix) {
  return Promise.resolve(val * ix);
}

asyncTest(async () => {
  const result = await Array.fromAsync({ [Symbol.asyncIterator]: asyncGen }, asyncMap);
  assert.compareArray(result, [0, 2, 8, 18], "async mapfn should be applied to async iterable");
});

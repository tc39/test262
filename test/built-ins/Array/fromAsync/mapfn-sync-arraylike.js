// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  A synchronous mapping function is applied to each (awaited) item of an
  arraylike.
info: |
  3.k.vii.4. If _mapping_ is *true*, then
    a. Let _mappedValue_ be ? Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).
    ...
  ...
  6. Perform ? CreateDataPropertyOrThrow(_A_, _Pk_, _mappedValue_).
flags: [async]
includes: [asyncHelpers.js, compareArray.js]
features: [Array.fromAsync]
---*/

const arrayLike = {
  length: 4,
  0: 0,
  1: 2,
  2: Promise.resolve(4),
  3: 6,
};

function syncMap(val, ix) {
  return val * ix;
}

asyncTest(async () => {
  const result = await Array.fromAsync(arrayLike, syncMap);
  assert.compareArray(result, [0, 2, 8, 18], "sync mapfn should be applied to arraylike");
});

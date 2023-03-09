// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Array.fromAsync tries the various properties in order
includes: [asyncHelpers.js, compareArray.js, temporalHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  async function * asyncGen() {
    for (let i = 0; i < 4; i++) {
      yield Promise.resolve(i * 2);
    }
  }

  const actual = [];
  const items = TemporalHelpers.propertyBagObserver(actual, {
    [Symbol.asyncIterator]: asyncGen,
    length: 2,
    0: Promise.resolve(2),
    1: Promise.resolve(1),
  }, "items");
  const result = await Array.fromAsync(items);
  assert.compareArray(result, [0, 2, 4, 6]);
  assert.compareArray(actual, [
    "get items[Symbol.asyncIterator]",
  ]);
});

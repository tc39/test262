// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Array.fromAsync respects array mutation
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const items = [1];
  const promise = Array.fromAsync(items);
  items.push(7);
  const result = await promise;
  assert.compareArray(result, [1, 7]);
});

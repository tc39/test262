// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Sync-iterable input with thenables awaits each callback result once with async mapping callback.
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expectedValue = {};
  const input = [ 0, 1, 2 ].values();
  let awaitCounter = 0;
  await Array.fromAsync(input, v => {
    return {
      // This “then” method should occur three times:
      // one for each value from the input.
      then (resolve, reject) {
        awaitCounter ++;
        resolve(v);
      },
    };
  });
  assert.sameValue(awaitCounter, 3);
});

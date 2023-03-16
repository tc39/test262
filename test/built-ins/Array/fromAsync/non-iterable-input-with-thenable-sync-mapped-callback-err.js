// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Non iterable input with thenables is dumped.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const input = {
    length: 1,
    0: 0,
  };
  const outputPromise = Array.fromAsync(input, v => {
    throw new Test262Error;
  });
  assert.throwsAsync(Test262Error, outputPromise);
})().then($DONE, $DONE);

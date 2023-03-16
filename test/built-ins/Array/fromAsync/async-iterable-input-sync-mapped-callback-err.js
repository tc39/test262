// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Async-iterable input with mapped result callback that fails is rejected.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  async function* generateInput () {
    yield 0;
  }

  const input = generateInput();
  const outputPromise = Array.fromAsync(input, v => {
    throw new Test262Error;
  });

  await assert.throwsAsync(Test262Error, outputPromise);

})().then($DONE, $DONE);

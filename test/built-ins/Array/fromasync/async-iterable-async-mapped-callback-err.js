// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Async-iterable input result promise rejects if async map function callback throws. 
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  async function* generateInput () {
    yield 0;
  }

  const input = generateInput();
  const outputPromise = Array.fromAsync(input, async v => {
    throw new Test262Error;
  });

  await assert.throwsAsync(Test262Error, outputPromise);

})().then($DONE, $DONE);

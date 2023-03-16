// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Result promise rejects if element access fails
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const input = {
    length: 1,
    get 0 () {
      throw new Test262Error;
    },
  };
  const outputPromise = Array.fromAsync(input);
  assert.throwsAsync(Test262Error, outputPromise);
})().then($DONE, $DONE);

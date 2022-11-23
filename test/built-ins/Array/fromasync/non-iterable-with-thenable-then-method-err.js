// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Non-iterable input with thenable result promise is rejected if element's then method throws.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const inputThenable = {
    then (resolve, reject) {
      throw new Test262Error;
    },
  };
  const input = {
    length: 1,
    0: inputThenable,
  };
  const outputPromise = Array.fromAsync(input);
  assert.throwsAsync(Test262Error, outputPromise);
})().then($DONE, $DONE);

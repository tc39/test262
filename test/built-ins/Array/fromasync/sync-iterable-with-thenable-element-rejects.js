// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Result promise rejects if then method of input fails. 
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const inputThenable = {
    then (resolve, reject) {
      reject(new Test262Error);
    },
  };
  const input = [ inputThenable ].values();
  const output = Array.fromAsync(input);
  await assert.throwsAsync(Test262Error, output);
})().then($DONE, $DONE);

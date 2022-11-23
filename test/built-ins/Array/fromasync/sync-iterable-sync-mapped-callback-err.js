// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Sync-iterable input with sync mapped callback that fails results in rejected promise.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const input = [ 0 ].values()
  const outputPromise = Array.fromAsync(input, v => {
    throw new Test262Error;
  });

  await assert.throwsAsync(Test262Error, outputPromise);

})().then($DONE, $DONE);

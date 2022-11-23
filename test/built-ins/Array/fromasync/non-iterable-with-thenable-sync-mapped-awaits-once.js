// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Non-iterable input with thenables awaits each input once without mapping callback
includes: [compareArray.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const expectedValue = {};
  let awaitCounter = 0;
  const inputThenable = {
    then (resolve, reject) {
      awaitCounter++;
      resolve(expectedValue);
    },
  };
  const input = {
    length: 1,
    0: inputThenable,
  };
  await Array.fromAsync(input, v => v);
  assert.sameValue(awaitCounter, 1);
})().then($DONE, $DONE);

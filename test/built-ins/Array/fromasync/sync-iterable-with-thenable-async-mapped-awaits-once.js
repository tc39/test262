// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Sync-iterable input with thenables awaits each input once with async mapping callback.
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
  const input = [ inputThenable ].values();
  await Array.fromAsync(input, async v => v);
  assert.sameValue(awaitCounter, 1);
})().then($DONE, $DONE);

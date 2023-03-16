// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Sync-iterable input with non-promise thenables works.
includes: [compareArray.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const expectedValue = {};
  const expected = [ expectedValue ];
  const inputThenable = {
    then (resolve, reject) {
      resolve(expectedValue);
    },
  };
  const input = [ inputThenable ].values();
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
})().then($DONE, $DONE);

// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  Non iterable input without thenables is dumped.
includes: [compareArray.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const expected = [ 0, 1, 2 ];
  const input = {
    length: 3,
    0: 0,
    1: 1,
    2: 2,
    3: 3, // This is ignored because the length is 3.
  };
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
})().then($DONE, $DONE);

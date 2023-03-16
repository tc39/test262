// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: Sync-iterable input with no promises is dumped.
includes: [compareArray.js]
flags: [async]
features: [Array.fromAsync]
---*/

(async function () {
  const expected = [ 0, 1, 2 ];
  const input = [ 0, 1, 2 ].values();
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
})().then($DONE, $DONE);

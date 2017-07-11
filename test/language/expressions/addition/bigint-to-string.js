// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: ToString for BigInt values
esid: pending
features: [BigInt]
---*/

const ToString = (x) => x + "";

assert.sameValue(ToString(-1n), "-1");
assert.sameValue(ToString(0n), "0");
assert.sameValue(ToString(1n), "1");
assert.sameValue(ToString(1234567890n), "1234567890");
assert.sameValue(ToString(-1234567890n), "-1234567890");

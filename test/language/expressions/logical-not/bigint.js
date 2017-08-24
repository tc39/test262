// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Conversion of BigInt values to booleans
esid: pending
features: [BigInt]
---*/

assert.sameValue(!!0n, false, "Expected ToBoolean(0n) to be false");
assert.sameValue(!!1n, true, "Expected ToBoolean(1n) to be true");

// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt division
esid: pending
features: [BigInt]
---*/

assert.throws(RangeError, () => 1n / 0n);

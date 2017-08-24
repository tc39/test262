// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Conversion of BigInt values to numbers
esid: pending
features: [BigInt]
---*/

assert.throws(TypeError, () => +0n);

// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Prototype of BigInt constructor
esid: pending
features: [BigInt]
---*/

assert.sameValue(Object.getPrototypeOf(BigInt), Function.prototype);

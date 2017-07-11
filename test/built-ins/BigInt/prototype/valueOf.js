// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt valueOf method and thisBigIntValue operation
esid: pending
features: [BigInt]
---*/

assert.sameValue(BigInt.prototype.valueOf.call(0n), 0n);
assert.sameValue(BigInt.prototype.valueOf.call(Object(0n)), 0n);
assert.throws(TypeError, () => BigInt.prototype.valueOf.call(null));

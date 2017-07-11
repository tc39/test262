// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt constructor
esid: pending
features: [BigInt]
---*/

assert.throws(TypeError, () => new BigInt(0));
for (let x of [NaN, Infinity, 0.5, 2**53]) {
    assert.throws(RangeError, () => BigInt(x));
    assert.throws(RangeError, () => BigInt(-x));
}
assert.sameValue(BigInt(9007199254740991), 9007199254740991n);
assert.sameValue(BigInt(-9007199254740991), -9007199254740991n);

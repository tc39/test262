// Copyright 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: Transferring toString to non-BigInt objects
info: >
  BigInt.prototype.toString ( [ radix ] )

  1. Let x be ? thisBigIntValue(this value).
---*/

for (let x of [new String(), new Boolean(), new Date(), new Object(), {x: 1}]) {
  x.toString = Number.prototype.toString;
  assert.throws(TypeError, () => x.toString());
}

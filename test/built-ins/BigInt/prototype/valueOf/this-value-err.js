// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.valueof
description: BigInt.prototype.valueOf this value coercion
info: >
  BigInt.prototype.valueOf ( )

  Return ? thisBigIntValue(this value).
includes: [typeCoercion.js]
features: [BigInt, arrow-function]
---*/

testNotCoercibleToBigIntThisValue(
  (x) => assert.throws(TypeError, () => BigInt.prototype.valueOf.call(x))
);

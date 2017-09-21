// Copyright 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint.prototype.tostring
description: Direct toString on BigInt prototype
info: >
  BigInt.prototype.toString ( [ radix ] )

  Let x be ? thisBigIntValue(this value).

  Properties of the BigInt Prototype Object

  The BigInt prototype is not a BigInt object; it does not have a
  [[BigIntData]] internal slot.
---*/

assert.throws(TypeError, () => BigInt.prototype.toString());
assert.throws(TypeError, () => BigInt.prototype.toString(10));
assert.throws(TypeError, () => BigInt.prototype.toString(undefined));

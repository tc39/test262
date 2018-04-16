// Copyright (C) 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: BigInt constructor called with integer argument
esid: sec-bigint-constructor
info: |
  BigInt ( value )

  ...
  3. If Type(prim) is Number, return ? NumberToBigInt(prim).

  NumberToBigInt ( number )

  ...
  3. Return a BigInt representing the mathematical value of number.
features: [BigInt]
---*/

assert.sameValue(BigInt(Number.MAX_SAFE_INTEGER), 9007199254740991n);

assert.sameValue(BigInt(-Number.MAX_SAFE_INTEGER), -9007199254740991n);

var pos = Math.pow(2, 53);
var neg = -pos;

assert.sameValue(BigInt(pos), 9007199254740992n,
                 "BigInt(2**53) === 9007199254740992n");

assert.sameValue(BigInt(neg), -9007199254740992n,
                 "BigInt(2**53) === -9007199254740992n");

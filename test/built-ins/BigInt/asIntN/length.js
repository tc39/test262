// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asIntN.length descriptor
info: >
  BigInt.asIntN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(BigInt.asIntN.length, 2);

verifyNotEnumerable(BigInt.asIntN, 'length');
verifyNotWritable(BigInt.asIntN, 'length');
verifyConfigurable(BigInt.asIntN, 'length');

// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asIntN.name descriptor
info: >
  BigInt.asIntN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(BigInt.asIntN.name, 'asIntN');

verifyNotEnumerable(BigInt.asIntN, 'name');
verifyNotWritable(BigInt.asIntN, 'name');
verifyConfigurable(BigInt.asIntN, 'name');

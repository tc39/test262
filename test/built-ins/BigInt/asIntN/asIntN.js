// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asIntN property descriptor
info: >
  BigInt.asIntN ( bits, bigint )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(typeof BigInt.asIntN, 'function');

verifyNotEnumerable(BigInt, 'asIntN');
verifyWritable(BigInt, 'asIntN');
verifyConfigurable(BigInt, 'asIntN');

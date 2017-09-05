// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInt32
esid: sec-bigint-parseint-string-radix
description: If radix is NaN, +0, -0, +Infinity, -Infinity, return radix = +0
---*/

assert.sameValue(BigInt.parseInt("11", NaN), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", +0), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", -0), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", Number.POSITIVE_INFINITY), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", Number.NEGATIVE_INFINITY), BigInt.parseInt("11", 10));

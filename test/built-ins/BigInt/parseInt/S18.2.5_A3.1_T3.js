// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToNumber
esid: sec-bigint-parseint-string-radix
description: Checking for undefined and null
---*/

assert.sameValue(BigInt.parseInt("11", undefined), BigInt.parseInt("11", 10));
assert.sameValue(BigInt.parseInt("11", null), BigInt.parseInt("11", 10));

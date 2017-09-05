// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of BigInt.parseInt has the attribute ReadOnly
esid: sec-bigint-parseint-string-radix
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/

var x = BigInt.parseInt.length;
verifyNotWritable(BigInt.parseInt, "length", null, Infinity);
assert.sameValue(BigInt.parseInt.length, x);

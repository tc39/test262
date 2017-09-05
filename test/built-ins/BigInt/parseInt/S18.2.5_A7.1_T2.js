// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If Z is empty, return NaN
esid: sec-bigint-parseint-string-radix
description: x is not a radix-R digit
---*/

assert.throws(SyntaxError, () => BigInt.parseInt("$0x"), "$0x");
assert.throws(SyntaxError, () => BigInt.parseInt("$0X"), "$0X");
assert.throws(SyntaxError, () => BigInt.parseInt("$$$"), "$$$");
assert.throws(SyntaxError, () => BigInt.parseInt(""), "the empty string");
assert.throws(SyntaxError, () => BigInt.parseInt(" "), "a string with a single space");

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    BigInt.parseInt is no longer allowed to treat a leading zero as indicating
    octal.  "If radix is undefined or 0, it is assumed to be 10 except
    when the number begins with the character pairs 0x or 0X, in which
    case a radix of 16 is assumed."
esid: sec-bigint-parseint-string-radix
description: Check if BigInt.parseInt still accepts octal
---*/

assert.sameValue(BigInt.parseInt("010"), 10n, "parseInt should no longer accept octal");

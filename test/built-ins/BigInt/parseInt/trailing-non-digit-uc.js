// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: Single digit with trailing non-digit (uppercase)
info: >
  BigInt.parseInt ( string, radix )

  9. c. If padding contains any code unit which is not a StrWhiteSpaceChar, throw a SyntaxError exception.

features: [BigInt, arrow-function]
---*/

var R_digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
for (var i = 2; i <= 36; i++) {
  assert.throws(SyntaxError, () => BigInt.parseInt(R_digit[i - 2] + "$", i));
}

// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: 10 with trailing non-digit
info: >
  BigInt.parseInt ( string, radix )

  9. c. If padding contains any code unit which is not a StrWhiteSpaceChar, throw a SyntaxError exception.
features: [BigInt, arrow-function]
---*/

for (var i = 2; i <= 36; i++) {
    assert.throws(SyntaxError, () => BigInt.parseInt("10$1", i));
}

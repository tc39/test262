// Copyright (C) 2017 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-bigint-parseint-string-radix
description: Trailing non-digit UTF-16 code point
info: >
  BigInt.parseInt ( string, radix )

  9. c. If padding contains any code unit which is not a StrWhiteSpaceChar, throw a SyntaxError exception.

includes: [decimalToHexString.js]
features: [BigInt, arrow-function]
---*/

let whitespace = /[\u0009\u000B\u000C\u0020\u00A0\uFEFF\u000A\u000D\u2028\u2029]/;

for (var index = 0; index <= 65535; index++) {
  if ((index < 0x0030) || (index > 0x0039) &&
      (index < 0x0041) || (index > 0x005A) &&
      (index < 0x0061) || (index > 0x007A)) {
    let char = String.fromCharCode(index);
    if (char.match(whitespace)) {
      assert.sameValue(BigInt.parseInt("1Z" + char, 36), 71n);
    } else {
      assert.throws(SyntaxError, () => BigInt.parseInt("1Z" + char, 36));
    }
  }
}

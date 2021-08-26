// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Single line comments can contain any Unicode character without Line
    Terminators
es5id: 7.4_A5
description: >
    "//var " + xx + "yy = true",
    replace xx with each Unicode BMP character or surrogate
includes: [decimalToHexString.js]
---*/

for (var uu = 0; uu <= 0xFFFF; ++uu) {
  try {
    var isLineTerminator = (uu === 0x0A || uu === 0x0D || uu === 0x2028 || uu === 0x2029);
    var xx = String.fromCharCode(uu);
    var yy = false;
    eval("//var " + xx + "yy = true");
    if (yy !== isLineTerminator) {
      throw new Test262Error('#' + decimalToHexString(uu) + ' ');
    }
  } catch (e) {
    throw new Test262Error('#' + decimalToHexString(uu) + ' ');
  }
}

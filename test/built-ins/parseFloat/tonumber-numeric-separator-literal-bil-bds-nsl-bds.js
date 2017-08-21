// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: 0b StrBinaryDigits, 0B StrBinaryDigits
info: |

  StrBinaryIntegerLiteral :::
    0b StrBinaryDigits
    0B StrBinaryDigits

  StrBinaryDigits :::
    BinaryDigit
    StrBinaryDigits BinaryDigit

  BinaryDigit ::: one of
    0 1

---*/

assert.sameValue(parseFloat("0b01_00"), 0b01);
assert.sameValue(parseFloat("0B01_00"), 0B01);

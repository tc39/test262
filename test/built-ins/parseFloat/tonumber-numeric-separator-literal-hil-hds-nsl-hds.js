// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: 0x StrHexDigits, 0X StrHexDigits
info: |

  StrHexLiteral :::
    0x StrHexDigits
    0X StrHexDigits

  StrHexDigits :::
    HexDigit
    StrHexDigits HexDigit

---*/

assert.sameValue(parseFloat("0x01_00"), 0x01);
assert.sameValue(parseFloat("0X01_00"), 0X01);

// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: NonZeroDigit NumericLiteralSeparator DecimalDigit
info: |

  StrStrUnsignedDecimalLiteral :::
    StrUnsignedDecimalLiteral

  NonZeroDigit ::: one of
    1 2 3 4 5 6 7 8 9

  StrDecimalDigits :::
    DecimalDigit
    ...

  DecimalDigit ::: one of
    0 1 2 3 4 5 6 7 8 9

---*/

assert.sameValue(parseFloat("1_0"), 1);
assert.sameValue(parseFloat("1_1"), 1);
assert.sameValue(parseFloat("2_2"), 2);
assert.sameValue(parseFloat("3_3"), 3);
assert.sameValue(parseFloat("4_4"), 4);
assert.sameValue(parseFloat("5_5"), 5);
assert.sameValue(parseFloat("6_6"), 6);
assert.sameValue(parseFloat("7_7"), 7);
assert.sameValue(parseFloat("8_8"), 8);
assert.sameValue(parseFloat("9_9"), 9);

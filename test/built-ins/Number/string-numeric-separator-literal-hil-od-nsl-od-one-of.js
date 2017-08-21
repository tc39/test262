// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit
info: |
  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

---*/

assert.sameValue(Number("0x0_0"), 0x00);
assert.sameValue(Number("0x1_1"), 0x11);
assert.sameValue(Number("0x2_2"), 0x22);
assert.sameValue(Number("0x3_3"), 0x33);
assert.sameValue(Number("0x4_4"), 0x44);
assert.sameValue(Number("0x5_5"), 0x55);
assert.sameValue(Number("0x6_6"), 0x66);
assert.sameValue(Number("0x7_7"), 0x77);
assert.sameValue(Number("0x8_8"), 0x88);
assert.sameValue(Number("0x9_9"), 0x99);
assert.sameValue(Number("0xa_a"), 0xaa);
assert.sameValue(Number("0xb_b"), 0xbb);
assert.sameValue(Number("0xc_c"), 0xcc);
assert.sameValue(Number("0xd_d"), 0xdd);
assert.sameValue(Number("0xe_e"), 0xee);
assert.sameValue(Number("0xf_f"), 0xff);
assert.sameValue(Number("0xA_A"), 0xAA);
assert.sameValue(Number("0xB_B"), 0xBB);
assert.sameValue(Number("0xC_C"), 0xCC);
assert.sameValue(Number("0xD_D"), 0xDD);
assert.sameValue(Number("0xE_E"), 0xEE);
assert.sameValue(Number("0xF_F"), 0xFF);

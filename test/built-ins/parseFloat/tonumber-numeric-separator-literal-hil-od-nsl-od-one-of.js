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

assert.sameValue(parseFloat("0x0_0"), 0x0);
assert.sameValue(parseFloat("0x1_1"), 0x1);
assert.sameValue(parseFloat("0x2_2"), 0x2);
assert.sameValue(parseFloat("0x3_3"), 0x3);
assert.sameValue(parseFloat("0x4_4"), 0x4);
assert.sameValue(parseFloat("0x5_5"), 0x5);
assert.sameValue(parseFloat("0x6_6"), 0x6);
assert.sameValue(parseFloat("0x7_7"), 0x7);
assert.sameValue(parseFloat("0x8_8"), 0x8);
assert.sameValue(parseFloat("0x9_9"), 0x9);
assert.sameValue(parseFloat("0xa_a"), 0xa);
assert.sameValue(parseFloat("0xb_b"), 0xb);
assert.sameValue(parseFloat("0xc_c"), 0xc);
assert.sameValue(parseFloat("0xd_d"), 0xd);
assert.sameValue(parseFloat("0xe_e"), 0xe);
assert.sameValue(parseFloat("0xf_f"), 0xf);
assert.sameValue(parseFloat("0xA_A"), 0xA);
assert.sameValue(parseFloat("0xB_B"), 0xB);
assert.sameValue(parseFloat("0xC_C"), 0xC);
assert.sameValue(parseFloat("0xD_D"), 0xD);
assert.sameValue(parseFloat("0xE_E"), 0xE);
assert.sameValue(parseFloat("0xF_F"), 0xF);

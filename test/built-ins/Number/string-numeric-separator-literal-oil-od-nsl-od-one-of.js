// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit
info: |
  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

---*/

assert.sameValue(Number("0o0_0"), 0o00);
assert.sameValue(Number("0o1_1"), 0o11);
assert.sameValue(Number("0o2_2"), 0o22);
assert.sameValue(Number("0o3_3"), 0o33);
assert.sameValue(Number("0o4_4"), 0o44);
assert.sameValue(Number("0o5_5"), 0o55);
assert.sameValue(Number("0o6_6"), 0o66);
assert.sameValue(Number("0o7_7"), 0o77);

// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: 0o StrOctalDigits, 0O StrOctalDigits
info: |

  StrOctalLiteral :::
    0o StrOctalDigits
    0O StrOctalDigits

  StrOctalDigits :::
    OctalDigit
    StrOctalDigits OctalDigit

---*/

assert.sameValue(parseFloat("0o0_0"), 0o0);
assert.sameValue(parseFloat("0o1_1"), 0o1);
assert.sameValue(parseFloat("0o2_2"), 0o2);
assert.sameValue(parseFloat("0o3_3"), 0o3);
assert.sameValue(parseFloat("0o4_4"), 0o4);
assert.sameValue(parseFloat("0o5_5"), 0o5);
assert.sameValue(parseFloat("0o6_6"), 0o6);
assert.sameValue(parseFloat("0o7_7"), 0o7);

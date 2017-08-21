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

assert.sameValue(parseFloat("0o01_0"), 0o01);
assert.sameValue(parseFloat("0O01_0"), 0O01);

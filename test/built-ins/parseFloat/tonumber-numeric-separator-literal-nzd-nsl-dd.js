// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: StrDecimalDigits
info: |

  StrDecimalDigits :::
    DecimalDigit
    StrDecimalDigits DecimalDigit
    ...

---*/

assert.sameValue(parseFloat("1_1"), 1);

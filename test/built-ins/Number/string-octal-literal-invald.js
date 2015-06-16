// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Invalid octal literals yield NaN
info: >
    BinaryIntegerLiteral ::
      0b BinaryDigits
      0B BinaryDigits
    BinaryDigits ::
      BinaryDigit
      BinaryDigits BinaryDigit
    BinaryDigit :: one of
      0 1
---*/

assert.sameValue(Number('0o8'), NaN, 'invalid digit');
assert.sameValue(Number('00o0'), NaN, 'leading zero');
assert.sameValue(Number('0o'), NaN, 'omitted digits');

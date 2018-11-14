// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If neither Result(2) nor any prefix of Result(2) satisfies the syntax of a
    StrDecimalLiteral (see 9.3.1), return NaN
es5id: 15.1.2.3_A3_T2
es6id: 18.2.4
esid: sec-parsefloat-string
description: parseFloat("wrong number format with ExponentIndicator") return NaN
---*/

assert.sameValue(parseFloat("e1"), NaN, "e1");
assert.sameValue(parseFloat("e-1"), NaN, "e-1");
assert.sameValue(parseFloat("E+1"), NaN, "E+1");
assert.sameValue(parseFloat("E0"), NaN, "E0");
assert.sameValue(parseFloat("-.e-1"), NaN, "-.e-1");
assert.sameValue(parseFloat(".e1"), NaN, ".e1");

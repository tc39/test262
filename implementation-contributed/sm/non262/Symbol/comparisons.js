// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var symbols = [
    Symbol(),
    Symbol("0"),
    Symbol.for("snowman"),
    Symbol.iterator
];

var values = [
    undefined, null, 0, 3.14, -0, NaN, "", "alphabet", Symbol("0"),
    {}, []
];

for (var comparator of ["==", "!=", "===", "!=="]) {
    var f = Function("a, b", "return a " + comparator + " b;");
    var expected = (comparator[0] == '!');
    for (var a of symbols) {
        for (var b of values)
            assert.sameValue(f(a, b), expected);
    }
}

for (var comparator of ["<", "<=", ">", ">="]) {
    var f = Function("a, b", "return a " + comparator + " b;");
    for (var a of symbols) {
        for (var b of values)
            assertThrowsInstanceOf(() => f(a, b), TypeError);
    }
}


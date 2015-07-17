// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.5-1
description: >
    Literal RegExp Objects - SyntaxError exception is thrown if the
    RegularExpressionNonTerminator position of a
    RegularExpressionBackslashSequence is a LineTerminator.
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var regExp = /\\\rn/;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

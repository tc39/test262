// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1-17-s
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: implements (implements)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            eval("var \u0069mplements = 123;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

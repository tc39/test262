// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-10
description: >
    7.3 - ES5 recognizes the character <PS> (\u2029) as a
    NonEscapeCharacter
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var prop = \\u2029;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

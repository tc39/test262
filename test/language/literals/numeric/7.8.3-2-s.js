// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-2-s
description: Strict Mode - octal extension (00) is forbidden in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var _7_8_3_2 = 00;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && typeof _7_8_3_2 === "undefined";
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-6-s
description: Strict Mode - octal extension (000) is forbidden in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var _7_8_3_6 = 000;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && typeof _7_8_3_6 === "undefined";
        }
    }
runTestCase(testcase);

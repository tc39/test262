// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-2-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a function
    parameter
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        function funObj(x) {
            eval("delete x;");
        }

        try {
            funObj(1);
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

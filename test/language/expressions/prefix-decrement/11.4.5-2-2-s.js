// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.5-2-2-s
description: Strict Mode - SyntaxError is thrown for --arguments
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var blah = arguments;
        try {
            eval("--arguments;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === arguments;
        }
    }
runTestCase(testcase);

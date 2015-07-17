// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-26-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a built-in
    (Error)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var errorBackup = Error;
        try {
            eval("delete Error;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        } finally {
            Error = errorBackup;
        }
        
    }
runTestCase(testcase);

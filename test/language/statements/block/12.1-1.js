// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.1-1
description: "12.1 - block '{ StatementListopt };' is not allowed: try-catch"
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("try{};catch(){}");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

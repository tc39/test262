// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.1-2
description: >
    12.1 - block '{ StatementListopt };' is not allowed:
    try-catch-finally
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("try{};catch{};finally{}");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

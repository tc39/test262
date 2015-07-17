// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.0-3
description: >
    13.0 - property names in function definition is not allowed, add a
    new property into object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        try {
            eval("function obj.tt() {};");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

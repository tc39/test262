// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-12-s
description: >
    StrictMode - SyntaxError is thrown if 'eval' occurs as the
    Identifier of a FunctionExpression in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var _13_1_12_s = {};

        try {
            eval("_13_1_12_s.x = function eval() {};");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

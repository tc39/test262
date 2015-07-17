// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.3.1-2-2-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'eval'
    appear as a PostfixExpression(eval++)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var blah = eval;
        try {
            eval("eval++;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === eval;
        }
    }
runTestCase(testcase);

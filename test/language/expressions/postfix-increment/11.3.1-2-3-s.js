// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.3.1-2-3-s
description: >
    Strict Mode - SyntaxError is not thrown if the identifier
    'arguments[...]' appears as a PostfixExpression(arguments++)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        arguments[1] = 7;
        arguments[1]++;
        return arguments[1]===8;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.3.1-2-2-s
description: >
    Strict Mode - SyntaxError is thrown if the identifier 'eval'
    appear as a PostfixExpression(eval++)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";
        var blah = eval;
        try {
            eval("eval++;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError && blah === eval;
        }
    }
runTestCase(testcase);

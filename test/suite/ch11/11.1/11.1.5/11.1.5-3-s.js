// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.5-3-s
description: >
    Strict Mode - SyntaxError is thrown when  'evals'  occurs as the
    Identifier in a PropertySetParameterList of a PropertyAssignment
    if its FunctionBody is strict code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            eval("var obj = {set _11_1_5_3_fun(eval) { \"use strict\"; }};");
            return false;
        } catch (e) {
            return (e instanceof SyntaxError);
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.5_6-2-1-s
description: >
    Strict Mode - SyntaxError is thrown when an assignment to a
    reserved word or a future reserved word is contained in strict code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";

        try {
            eval("var obj = {\
                get _11_1_5_6_2_1() {\
                   public = 42;\
                   return public;\
                }\
            };");

            var _11_1_5_6_2_1 = obj._11_1_5_6_2_1;
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);

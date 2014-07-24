// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.1.1-15-s
description: >
    Strict Mode - Function code that is part of a FunctionDeclaration
    is strict function code if FunctionDeclaration is contained in use
    strict
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";
        function fun() {
            try {
                eval("var public = 1;");
                return false;
            } catch (e) {
                return e instanceof SyntaxError;
            }
        }

        return fun();
    }
runTestCase(testcase);

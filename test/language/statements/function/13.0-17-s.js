// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
es5id: 13.0-17-s
description: >
    Strict Mode - SourceElements is not evaluated as strict mode code
    when a Function constructor is contained in strict mode code
    within eval code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        eval("'use strict'; var _13_0_17_fun = new Function('eval = 42;'); _13_0_17_fun();");
        return true;
    }
runTestCase(testcase);

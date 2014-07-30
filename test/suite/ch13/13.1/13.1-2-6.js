// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.1-2-6
description: >
    arguments allowed as formal parameter name of a non-strict
    function expression
includes: [runTestCase.js]
---*/

function testcase()
{
    eval("(function foo(arguments){});");
    return true;
 }
runTestCase(testcase);

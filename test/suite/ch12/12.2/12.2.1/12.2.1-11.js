// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.2.1-11
description: arguments as var identifier in eval code is allowed
includes: [runTestCase.js]
---*/

function testcase() {
    eval("var arguments;");
    return true;
 }
runTestCase(testcase);

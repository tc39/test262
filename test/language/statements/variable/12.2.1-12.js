// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.2.1-12
description: arguments as local var identifier is allowed
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
    eval("(function (){var arguments;})");
    return true;
 }
runTestCase(testcase);

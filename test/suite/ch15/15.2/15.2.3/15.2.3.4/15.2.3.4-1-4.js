// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-1-4
description: >
    Object.getOwnPropertyNames does not throw TypeError if 'O' is a
    boolean
includes: [runTestCase.js]
---*/

function testcase() {
    Object.getOwnPropertyNames(true);
    return true;
}
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-3-1
description: >
    Object.getOwnPropertyNames - elements of the returned array start
    from index 0
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: 1001 };

        var arr = Object.getOwnPropertyNames(obj);

        return arr.hasOwnProperty(0) && arr[0] === "prop1";
    }
runTestCase(testcase);

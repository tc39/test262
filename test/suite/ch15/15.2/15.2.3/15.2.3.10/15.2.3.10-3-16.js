// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-16
description: >
    Object.preventExtensions - named properties cannot be added into a
    Boolean object
includes: [runTestCase.js]
---*/

function testcase() {
        var boolObj = new Boolean(true);
        var preCheck = Object.isExtensible(boolObj);
        Object.preventExtensions(boolObj);

        boolObj.exName = 2;
        return preCheck && !boolObj.hasOwnProperty("exName");
    }
runTestCase(testcase);

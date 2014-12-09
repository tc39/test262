// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-9
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a RegExp object
includes: [runTestCase.js]
---*/

function testcase() {
        var regObj = new RegExp();
        var preCheck = Object.isExtensible(regObj);
        Object.preventExtensions(regObj);

        regObj[0] = 12;
        return preCheck && !regObj.hasOwnProperty("0");
    }
runTestCase(testcase);

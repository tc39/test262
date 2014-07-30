// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-3
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a Function object
includes: [runTestCase.js]
---*/

function testcase() {
        var funObj = function () { };
        var preCheck = Object.isExtensible(funObj);
        Object.preventExtensions(funObj);

        funObj[0] = 12;
        return preCheck && !funObj.hasOwnProperty("0");
    }
runTestCase(testcase);

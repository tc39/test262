// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-192
description: >
    Object.defineProperties - 'get' property of 'descObj' is not
    present (8.10.5 step 7)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var setter = function () { };

        Object.defineProperties(obj, {
            property: {
                set: setter
            }
        });

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);

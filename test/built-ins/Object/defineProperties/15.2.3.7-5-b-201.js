// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-201
description: >
    Object.defineProperties - 'get' property of 'descObj' is own
    accessor property without a get function (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var descObj = {};

        Object.defineProperty(descObj, "get", {
            set: function () { }
        });

        Object.defineProperties(obj, {
            property: descObj
        });

        return typeof (obj.property) === "undefined";
    }
runTestCase(testcase);

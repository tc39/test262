// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-144
description: >
    Object.defineProperties - 'writable' property of 'descObj' is own
    accessor property (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var descObj = {};

        Object.defineProperty(descObj, "writable", {
            get: function () {
                return false;
            }
        });

        Object.defineProperties(obj, {
            property: descObj
        });

        obj.property = "isWritable";

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);

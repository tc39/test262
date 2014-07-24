// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-186
description: >
    Object.defineProperties - value of 'writable' property of
    'descObj' is the Argument object (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var func = function (a, b, c) {
            return arguments;
        };

        Object.defineProperties(obj, {
            property: {
                writable: func(1, true, "a")
            }
        });

        obj.property = "isWritable";

        return obj.property === "isWritable";
    }
runTestCase(testcase);

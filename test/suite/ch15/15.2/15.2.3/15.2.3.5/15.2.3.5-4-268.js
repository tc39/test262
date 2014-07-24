// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-268
description: >
    Object.create - 'set' property of one property in 'Properties' is
    own data property (8.10.5 step 8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var data = "data";

        var newObj = Object.create({}, {
            prop: {
                set: function (value) {
                    data = value;
                }
            }
        });

        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = "overrideData";

        return hasProperty && data === "overrideData";
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-146
description: >
    Object.create - 'configurable' property of one property in
    'Properties' is an Error object (8.10.5 step 4.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var newObj = Object.create({}, {
            prop: {
                configurable: new Error()
            }
        });

        var beforeDeleted = newObj.hasOwnProperty("prop");

        delete newObj.prop;

        var afterDeleted = newObj.hasOwnProperty("prop");

        return beforeDeleted === true && afterDeleted === false;
    }
runTestCase(testcase);

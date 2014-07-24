// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-211
description: >
    Object.create - 'writable' property of one property in
    'Properties' is NaN (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var newObj = Object.create({}, {
            prop: {
                writable: NaN
            }
        });
        var hasProperty = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";

        newObj.prop = 121;

        return hasProperty && typeof newObj.prop === "undefined";
    }
runTestCase(testcase);

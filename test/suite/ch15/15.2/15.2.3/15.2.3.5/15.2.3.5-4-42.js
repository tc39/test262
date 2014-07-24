// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-42
description: >
    Object.create - value of one property in 'Properties' is null
    (8.10.5 step 1)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.create({}, {
                prop: null 
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }

    }
runTestCase(testcase);

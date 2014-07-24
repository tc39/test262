// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-51
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is +0 (8.10.5 step 3.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var accessed = false;

        Object.defineProperty(obj, "property", { enumerable: +0 });

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }
        return !accessed;
    }
runTestCase(testcase);

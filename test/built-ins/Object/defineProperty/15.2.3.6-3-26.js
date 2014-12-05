// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-26
description: >
    Object.defineProperty - 'enumerable' property in 'Attributes' is
    own accessor property (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var accessed = false;

        var attr = {};
        Object.defineProperty(attr, "enumerable", {
            get: function () {
                return true;
            }
        });

        Object.defineProperty(obj, "property", attr);

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);

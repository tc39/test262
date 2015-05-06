// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-236
description: >
    Object.defineProperty - 'set' property in 'Attributes' is not
    present (8.10.5 step 8)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            get: function () {
                return 11;
            }
        });

        obj.property = 14;
        var desc = Object.getOwnPropertyDescriptor(obj, "property");
        return obj.hasOwnProperty("property") && obj.property === 11 && typeof desc.set === "undefined";
    }
runTestCase(testcase);

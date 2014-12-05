// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-570
description: >
    ES5 Attributes - [[Get]] attribute is a function which doesn't
    contains return statement
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var verifyExecute = false;
        var getFunc = function () {
            verifyExecute = true;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && desc.get === getFunc && typeof obj.prop === "undefined" && verifyExecute;
    }
runTestCase(testcase);

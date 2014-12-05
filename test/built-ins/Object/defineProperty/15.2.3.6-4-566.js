// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-566
description: >
    ES5 Attributes - [[Get]] attribute is a function which has zero
    argument
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var getFunc = function () {
            return 2010;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && obj.prop === 2010 && desc.get === getFunc;
    }
runTestCase(testcase);

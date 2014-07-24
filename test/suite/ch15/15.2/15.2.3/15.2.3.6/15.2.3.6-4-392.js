// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-392
description: >
    ES5 Attributes - [[Value]] attribute of data property is a Date
    object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var dateObj = new Date();

        Object.defineProperty(obj, "prop", {
            value: dateObj
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === dateObj && desc.value === dateObj;
    }
runTestCase(testcase);

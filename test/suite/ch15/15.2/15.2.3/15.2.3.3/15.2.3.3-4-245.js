// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-4-245
description: >
    Object.getOwnPropertyDescriptor - ensure that 'set' property of
    returned object is data property with correct 'enumerable'
    attribute
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var fun = function () {
            return "ownSetProperty";
        };
        Object.defineProperty(obj, "property", {
            set: fun,
            configurable: true
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "property");
        var accessed = false;

        for (var prop in desc) {
            if (prop === "set") {
                accessed = true;
            }
        }

        return accessed;
    }
runTestCase(testcase);

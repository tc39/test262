// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-409
description: >
    ES5 Attributes - Inherited property whose [[Enumerable]] attribute
    is set to false is enumerable (RegExp instance)
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(RegExp.prototype, "prop", {
                value: 1001,
                writable: true,
                enumerable: true,
                configurable: true
            });
            var regObj = new RegExp();

            var verifyEnumerable = false;
            for (var p in regObj) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !regObj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete RegExp.prototype.prop;
        }
    }
runTestCase(testcase);

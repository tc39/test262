// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-510
description: >
    ES5 Attributes - fail to update [[Configurable]] attribute of
    accessor property ([[Get]] is a Function, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: true,
            configurable: false
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                configurable: true
            });

            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            delete obj.prop;

            return desc1.configurable === false && desc2.configurable === false && obj.hasOwnProperty("prop") && e instanceof TypeError;
        }
    }
runTestCase(testcase);

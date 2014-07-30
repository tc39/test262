// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-a-5
description: >
    Object.defineProperties - enumerable own accessor property of
    'Properties' without a get function is defined in 'O'
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        var props = {};
        Object.defineProperty(props, "prop", {
            get: function () {
                return {
                    set: function () { }
                };
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);

        return obj.hasOwnProperty("prop") && typeof obj.prop === "undefined";
    }
runTestCase(testcase);

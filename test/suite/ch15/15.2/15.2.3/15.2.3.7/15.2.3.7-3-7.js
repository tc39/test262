// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-3-7
description: >
    Object.defineProperties - no additional property is defined in 'O'
    when 'Properties' doesn't contain enumerable own property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        var props = {};

        Object.defineProperty(props, "prop1", {
            value: {},
            enumerable: false
        });

        Object.defineProperty(props, "prop2", {
            get: function () {
                return {};
            },
            enumerable: false
        });

        Object.defineProperties(obj, props);

        return !obj.hasOwnProperty("prop1") && !obj.hasOwnProperty("prop2");
    }
runTestCase(testcase);

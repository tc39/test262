// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-19
description: >
    Object.create -  own enumerable accessor property in 'Properties'
    is defined in 'obj' (15.2.3.7 step 3)
includes: [runTestCase.js]
---*/

function testcase() {

        var props = {};

        Object.defineProperty(props, "prop", {
            get: function () {
                return {};
            },
            enumerable: true
        });

        var newObj = Object.create({}, props);

        return newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);

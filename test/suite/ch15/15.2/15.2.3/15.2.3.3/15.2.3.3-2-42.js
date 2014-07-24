// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-2-42
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is an object which
    has an own toString method
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "abc": 1 };

        var ownProp = {
            toString: function () {
                return "abc";
            }
        };

        var desc = Object.getOwnPropertyDescriptor(obj, ownProp);

        return desc.value === 1;
    }
runTestCase(testcase);

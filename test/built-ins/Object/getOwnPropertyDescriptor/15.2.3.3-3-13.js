// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-3-13
description: >
    Object.getOwnPropertyDescriptor applied to the Arguments object
    which implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var arg = (function () {
            return arguments;
        }("ownProperty", true));

        var desc = Object.getOwnPropertyDescriptor(arg, "0");

        return desc.value === "ownProperty" && desc.writable === true && desc.enumerable === true && desc.configurable === true;
    }
runTestCase(testcase);

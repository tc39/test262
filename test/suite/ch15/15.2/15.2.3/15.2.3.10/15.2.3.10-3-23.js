// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-23
description: >
    Object.preventExtensions - properties can still be reassigned
    after extensions have been prevented
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop: 12 };
        var preCheck = Object.isExtensible(obj);
        Object.preventExtensions(obj);

        obj.prop = -1;

        return preCheck && obj.prop === -1;
    }
runTestCase(testcase);

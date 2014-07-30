// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-2-3
description: Object.getOwnPropertyDescriptor - argument 'P' is undefined
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "undefined": 1 };

        var desc1 = Object.getOwnPropertyDescriptor(obj, undefined);
        var desc2 = Object.getOwnPropertyDescriptor(obj, "undefined");

        return desc1.value === 1 && desc2.value === 1;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-2-33
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is applied to
    string 'AB  \cd'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "AB\n\\cd": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, "AB\n\\cd");

        return desc.value === 1;
    }
runTestCase(testcase);

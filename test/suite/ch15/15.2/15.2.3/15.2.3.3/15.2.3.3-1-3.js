// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.getOwnPropertyDescriptor - TypeError is thrown when first
    param is a boolean
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.getOwnPropertyDescriptor(true, "foo");
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);

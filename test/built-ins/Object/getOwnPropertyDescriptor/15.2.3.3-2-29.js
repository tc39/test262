// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-29
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a decimal that
    converts to a string (value is 123.456)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "123.456": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 123.456);

        return desc.value === 1;
    }
runTestCase(testcase);

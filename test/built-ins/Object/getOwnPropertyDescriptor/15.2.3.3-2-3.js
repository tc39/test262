// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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

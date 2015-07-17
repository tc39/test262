// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-6
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a boolean whose
    value is true
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "true": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, true);

        return desc.value === 1;
    }
runTestCase(testcase);

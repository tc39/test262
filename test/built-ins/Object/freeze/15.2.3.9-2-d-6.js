// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-6
description: Object.freeze - 'O' is a Date object
includes: [runTestCase.js]
---*/

function testcase() {
        var dateObj = new Date();

        Object.freeze(dateObj);

        return Object.isFrozen(dateObj);
    }
runTestCase(testcase);

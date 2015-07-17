// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-6
description: Object.seal - 'O' is a Date object
includes: [runTestCase.js]
---*/

function testcase() {

        var dateObj = new Date();
        var preCheck = Object.isExtensible(dateObj);
        Object.seal(dateObj);

        return preCheck && Object.isSealed(dateObj);
    }
runTestCase(testcase);

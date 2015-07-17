// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-7
description: Object.freeze - 'O' is a RegExp object
includes: [runTestCase.js]
---*/

function testcase() {
        var regObj = new RegExp();

        Object.freeze(regObj);

        return Object.isFrozen(regObj);
    }
runTestCase(testcase);

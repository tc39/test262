// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-3
description: Object.freeze - 'O' is a String object
includes: [runTestCase.js]
---*/

function testcase() {
        var strObj = new String("a");

        Object.freeze(strObj);

        return Object.isFrozen(strObj);
    }
runTestCase(testcase);

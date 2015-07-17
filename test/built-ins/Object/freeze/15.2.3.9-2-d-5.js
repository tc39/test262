// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-5
description: Object.freeze - 'O' is a Number object
includes: [runTestCase.js]
---*/

function testcase() {
        var numObj = new Number(3);

        Object.freeze(numObj);

        return Object.isFrozen(numObj);
    }
runTestCase(testcase);

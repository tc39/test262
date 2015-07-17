// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-8
description: Object.freeze - 'O' is an Error object
includes: [runTestCase.js]
---*/

function testcase() {
        var errObj = new SyntaxError();

        Object.freeze(errObj);

        return Object.isFrozen(errObj);
    }
runTestCase(testcase);

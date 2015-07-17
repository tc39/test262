// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-8
description: Object.seal - 'O' is an Error object
includes: [runTestCase.js]
---*/

function testcase() {

        var errObj = new Error();
        var preCheck = Object.isExtensible(errObj);
        Object.seal(errObj);

        return preCheck && Object.isSealed(errObj);

    }
runTestCase(testcase);

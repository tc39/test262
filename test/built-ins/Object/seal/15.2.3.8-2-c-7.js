// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-7
description: Object.seal - 'O' is a RegExp object
includes: [runTestCase.js]
---*/

function testcase() {
        var regObj = new RegExp();
        var preCheck = Object.isExtensible(regObj);
        Object.seal(regObj);

        return preCheck && Object.isSealed(regObj);
    }
runTestCase(testcase);

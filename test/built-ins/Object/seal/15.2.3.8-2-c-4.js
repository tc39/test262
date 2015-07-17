// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-4
description: Object.seal - 'O' is a Boolean object
includes: [runTestCase.js]
---*/

function testcase() {

        var boolObj = new Boolean(false);
        var preCheck = Object.isExtensible(boolObj);
        Object.seal(boolObj);

        return preCheck && Object.isSealed(boolObj);

    }
runTestCase(testcase);

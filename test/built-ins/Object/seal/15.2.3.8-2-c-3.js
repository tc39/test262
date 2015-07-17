// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-3
description: Object.seal - 'O' is a String object
includes: [runTestCase.js]
---*/

function testcase() {

        var strObj = new String("a");
        var preCheck = Object.isExtensible(strObj);
        Object.seal(strObj);

        return preCheck && Object.isSealed(strObj);

    }
runTestCase(testcase);

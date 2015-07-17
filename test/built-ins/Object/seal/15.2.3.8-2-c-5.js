// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-2-c-5
description: Object.seal - 'O' is a Number object
includes: [runTestCase.js]
---*/

function testcase() {

        var numObj = new Number(3);
        var preCheck = Object.isExtensible(numObj);
        Object.seal(numObj);

        return preCheck && Object.isSealed(numObj);

    }
runTestCase(testcase);

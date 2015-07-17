// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-a-14
description: Object.isFrozen - 'O' is an Array object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = [2];
        obj.len = 200;

        Object.preventExtensions(obj);

        return !Object.isFrozen(obj);
    }
runTestCase(testcase);

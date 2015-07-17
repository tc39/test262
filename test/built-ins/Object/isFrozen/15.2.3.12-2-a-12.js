// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-2-a-12
description: Object.isFrozen - 'O' is a String object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new String("abc");

        obj.len = 100;

        Object.preventExtensions(obj);

        return !Object.isFrozen(obj);
    }
runTestCase(testcase);

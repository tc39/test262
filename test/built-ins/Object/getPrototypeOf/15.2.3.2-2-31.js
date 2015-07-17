// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.2-2-31
description: Object.getPrototypeOf returns null
includes: [runTestCase.js]
---*/

function testcase() {

        return (Object.getPrototypeOf(Object.prototype) === null);
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-8
description: Array.prototype.lastIndexOf applied to String object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new String("undefined");

        return Array.prototype.lastIndexOf.call(obj, "f") === 4;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-14
description: Array.prototype.lastIndexOf applied to Error object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new SyntaxError();
        obj.length = 2;
        obj[1] = Infinity;

        return Array.prototype.lastIndexOf.call(obj, Infinity) === 1;
    }
runTestCase(testcase);

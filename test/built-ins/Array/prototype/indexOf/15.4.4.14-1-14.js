// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-14
description: Array.prototype.indexOf applied to Error object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = new SyntaxError();
        obj[1] = true;
        obj.length = 2;

        return Array.prototype.indexOf.call(obj, true) === 1;
    }
runTestCase(testcase);

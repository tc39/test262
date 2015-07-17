// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-6
description: Array.prototype.lastIndexOf when 'fromIndex' isn't passed
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [0, 1, 2, 3, 4];
        //'fromIndex' will be set as 4 if not passed by default
        return arr.lastIndexOf(0) === arr.lastIndexOf(0, 4) &&
            arr.lastIndexOf(2) === arr.lastIndexOf(2, 4) &&
            arr.lastIndexOf(4) === arr.lastIndexOf(4, 4);
    }
runTestCase(testcase);

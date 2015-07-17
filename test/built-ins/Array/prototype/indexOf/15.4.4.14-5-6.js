// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-6
description: Array.prototype.indexOf - 'fromIndex' isn't passed
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [0, 1, 2, 3, 4];
        //'fromIndex' will be set as 0 if not passed by default
        return arr.indexOf(0) === arr.indexOf(0, 0) &&
            arr.indexOf(2) === arr.indexOf(2, 0) &&
            arr.indexOf(4) === arr.indexOf(4, 0); 
    }
runTestCase(testcase);

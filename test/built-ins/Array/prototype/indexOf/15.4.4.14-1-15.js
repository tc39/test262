// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-1-15
description: Array.prototype.indexOf applied to Arguments object
includes: [runTestCase.js]
---*/

function testcase() {

        function fun() {
            return arguments;
        }
        var obj = fun(1, true, 3);

        return Array.prototype.indexOf.call(obj, true) === 1;
    }
runTestCase(testcase);

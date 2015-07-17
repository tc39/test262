// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-15
description: Array.prototype.lastIndexOf applied to the Arguments object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = (function fun() {
            return arguments;
        }(1, 2, 3));

        return Array.prototype.lastIndexOf.call(obj, 2) === 1;
    }
runTestCase(testcase);

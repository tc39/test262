// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-2-17
description: >
    Array.prototype.reduce applied to the Arguments object, which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (obj.length === 2);
        }

        var func = function (a, b) {
            arguments[2] = 9;
            return Array.prototype.reduce.call(arguments, callbackfn, 1);
        };

        return func(12, 11) === true;
    }
runTestCase(testcase);

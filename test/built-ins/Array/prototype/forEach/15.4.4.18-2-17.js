// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-2-17
description: >
    Array.prototype.forEach applied to the Arguments object, which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        var result = false;
        function callbackfn(val, idx, obj) {
            result = (obj.length === 2);
        }

        var func = function (a, b) {
            arguments[2] = 9;
            Array.prototype.forEach.call(arguments, callbackfn);
            return result;
        };

        return func(12, 11);
    }
runTestCase(testcase);

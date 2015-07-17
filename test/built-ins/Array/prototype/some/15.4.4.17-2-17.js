// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-17
description: >
    Array.prototype.some applied to the Arguments object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var func = function (a, b) {
            arguments[2] = 12;
            return Array.prototype.some.call(arguments, callbackfn1) &&
                !Array.prototype.some.call(arguments, callbackfn2);
        };

        return func(9, 11);
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-17
description: >
    Array.prototype.indexOf applied to Arguments object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var func = function (a, b) {
            arguments[2] = false;
            return Array.prototype.indexOf.call(arguments, true) === 1 &&
                Array.prototype.indexOf.call(arguments, false) === -1;
        };

        return func(0, true);
    }
runTestCase(testcase);

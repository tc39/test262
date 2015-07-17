// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-22
description: >
    Array.prototype.indexOf - value of 'fromIndex' is an Object, which
    has an own valueOf method
includes: [runTestCase.js]
---*/

function testcase() {

        var fromIndex = {
            valueOf: function () {
                return 1;
            }
        };


        return [0, true].indexOf(true, fromIndex) === 1;
    }
runTestCase(testcase);

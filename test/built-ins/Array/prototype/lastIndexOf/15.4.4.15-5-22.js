// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-22
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' which is an
    object, and has an own valueOf method
includes: [runTestCase.js]
---*/

function testcase() {

        var fromIndex = {
            valueOf: function () {
                return 2;
            }
        };

        var targetObj = function () {};
        return [0, true, targetObj, 3, false].lastIndexOf(targetObj, fromIndex) === 2 &&
        [0, true, 3, targetObj, false].lastIndexOf(targetObj, fromIndex) === -1;
    }
runTestCase(testcase);

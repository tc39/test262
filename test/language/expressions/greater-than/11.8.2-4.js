// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.8.2-4
description: >
    11.8.2 Greater-than Operator - Partial left to right order
    enforced when using Greater-than operator: toString > toString
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        var obj1 = {
            toString: function () {
                accessed = true;
                return 3;
            }
        };
        var obj2 = {
            toString: function () {
                if (accessed === true) {
                    return 4;
                } else {
                    return 2;
                }
            }
        };
        return !(obj1 > obj2);
    }
runTestCase(testcase);

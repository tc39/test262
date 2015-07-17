// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.6.4-1
description: >
    The for-in Statement - a property name must not be visited more
    than once in any enumeration.
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { prop1: "abc", prop2: "bbc", prop3: "cnn" };

        var countProp1 = 0;
        var countProp2 = 0;
        var countProp3 = 0;

        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (p === "prop1") {
                    countProp1++;
                }
                if (p === "prop2") {
                    countProp2++;
                }
                if (p === "prop3") {
                    countProp3++;
                }
            }
        }
        return countProp1 === 1 && countProp2 === 1 && countProp3 === 1;
    }
runTestCase(testcase);

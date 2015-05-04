// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach visited keys are not visited if assocoiated
    value is modified
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.set(1, "2");
    map.set(2, "3");
    map.set(3, "3");
    var count = 0;

    try{
        map.forEach(function (arg1, arg2, arg3) {
            if (count == 1) {
                map.set(1, "2");
            }
            if (count == 2) {
                map.set(2, "3");
            }
            if (count > 3) throw new Error();
            count++;
        });
    } catch (e) {
    }


    if (count !== 3) return false;
    var test = "";
    map.forEach(function (val, key) {
        test += (key + '' + val);
    });

    return test === "122333";



};
runTestCase(testcase);

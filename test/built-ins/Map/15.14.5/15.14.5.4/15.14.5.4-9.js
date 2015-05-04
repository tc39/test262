// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach arguments passed in foreach callbackfn are
    value, value and set object
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.set(1, "2");
    var myException = {};

    try {
        map.forEach(function (arg1, arg2, arg3) {
            if ((arguments.length === 3) &&
                (arg1 === "2") &&
                (arguments[0] === "2") &&
                (arg2 === 1) &&
                (arguments[1] === 1) &&
                (arg3 === map) &&
                (arguments[2] === map)) throw myException;
        })
    } catch (e) {
        if (e === myException) return true;
    }

    return false;
};
runTestCase(testcase);

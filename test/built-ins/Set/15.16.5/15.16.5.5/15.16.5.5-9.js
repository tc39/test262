// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach arguments passed in foreach callbackfn are
    value, value and set object
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.add(1);
    var mySetException = {};

    try{
        set.forEach(function (arg1, arg2, arg3) {
            if ((arguments.length !== 3) || (arg1 !== 1) || (arguments[0] !== 1) || (arg2 !== 1) || (arguments[1] !== 1) || (arg3 !== set) || (arguments[2] !== set)) throw mySetException;
        })
    } catch (e) {
        return false;
    }

    return true;
};
runTestCase(testcase);

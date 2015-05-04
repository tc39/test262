// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verify thisArg being passed in set.forEach
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    var values = [1, 2, 3];
    var thisArg = {};
    var mySetException = {};

    try{
        set.forEach(function (arg1, arg2, arg3) { if (this !== thisArg) throw mySetException; }, thisArg);
    } catch (e) {
        return false;
    }

    return true;

};
runTestCase(testcase);

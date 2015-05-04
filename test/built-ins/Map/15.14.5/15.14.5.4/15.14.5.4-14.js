// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verify thisArg being passed in set.forEach
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var values = [1, 2, 3];
    var thisArg = {};

    try{
        map.forEach(function (arg1, arg2, arg3) { if (this !== thisArg) throw new Error(); }, thisArg);
    } catch (e) {
        return false;
    }

    return true;

};
runTestCase(testcase);

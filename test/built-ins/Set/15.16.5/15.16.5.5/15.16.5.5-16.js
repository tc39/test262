// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verify Exception exits the loop
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.add(1);
    set.add(2);
    var count = 0;

    try{
        set.forEach(function (arg1, arg2, arg3) { count++; throw new Error(); });
    } catch (e) {
    }


    return count === 1;

};
runTestCase(testcase);

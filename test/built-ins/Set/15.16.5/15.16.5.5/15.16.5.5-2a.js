// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach should throw TypeError if callbackfn is
    undefined
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var set = new Set();
        set.forEach();
    } catch (e) {
        if (e instanceof TypeError) return true;
    }
    return false;
};
runTestCase(testcase);

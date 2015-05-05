// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.set TypeError is key is not an object
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new WeakMap();
    var testFail = false;

    var testVector = [1, true, null, undefined, Infinity, NaN];

    testVector.forEach(function (val) {
        try {
            map.set(val, 1);
            testFail = true;
        } catch (e) {
            if (!(e instanceof TypeError)) testFail = true;
        }
    })

    return !testFail;
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.set TypeError key can be any ECMAScript value
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();
    var testFail = false;

    var testVector = [1, +0, -0, 1.23E-10, Infinity, NaN, true, {}, [], new Function(), new Date(), new Error(), new String, new Boolean(), new Number(), undefined, null, this]


    testVector.forEach(function (val) {
        try {
            map.set(val, 1);
            if (!map.has(val)) testFail = true;
            if (map.get(val) !== 1) testFail = false;
        } catch (e) {
            testFail = false;
        }
    })

    return !testFail;
};
runTestCase(testcase);

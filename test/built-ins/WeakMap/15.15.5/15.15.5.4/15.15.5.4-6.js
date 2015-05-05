// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap.prototype.get should throw TypeError is key is not an
    object
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new WeakMap();
    var testVector = [1, true, "", Infinity, -0, NaN, undefined, null]
    var tesFail = false;
    testVector.forEach(function (val) {
        try {
            if (map.get(val) !== undefined) throw new Error();
        } catch (e) {
            tesFail = true;
        }
    });

    return !tesFail;

};
runTestCase(testcase);

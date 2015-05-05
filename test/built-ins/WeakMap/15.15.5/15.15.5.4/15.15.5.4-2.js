// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.get verify returned value
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new WeakMap();

    var testVector = [{}, [], new Function(), new Date(), new Error(), new String, new Boolean(), new Number()]

    testVector.forEach(function (val) {
        map.set(val, val);
    });

    var i = 0;
    try {
        testVector.forEach(function (val) {
            if (map.get(val) !== val) throw new Error();
        });
    } catch (e) {
        return false;
    }

    return true;
};
runTestCase(testcase);

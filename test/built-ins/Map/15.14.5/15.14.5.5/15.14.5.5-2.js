// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.get verify returned value
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();

    //var testVector = [1, 0]
    var testVector = [1, 0, 1.23E-10, Infinity, true, {}, [], new Function(), new Date(), new Error(), new String, new Boolean(), new Number()]

    testVector.forEach(function (val) {
        map.set(val, val);
    });

    var i = 0;
    try {
        map.forEach(function (val, key) {
            if ((val !== key) || (key !== testVector[i])) throw new Error();
            i++;
        });
    } catch (e) {
        return false;
    }

    return true;
};

runTestCase(testcase);

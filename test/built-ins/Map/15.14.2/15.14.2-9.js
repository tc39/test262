// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map Constructor called as function. Verify prototype is not a Map
    and resulting object has [[MapData]]
includes: [runTestCase.js]
---*/

function testcase() {

    var testVector = [1, +0, -0, 1.23E-10, Infinity, NaN, true, {}, new Function(), new Date(), new Error(), new String, new Boolean(), new Number(), new Array()];
    var testfail = false;

    var map;

    testVector.forEach(function (val) {
        try{
            map = Map.call(val);
             tesfail = true;
        } catch (e) {
        }
    });

    return !testfail;

};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.delete on empty map
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    var values = [1, +0, -0, 1.23E-10, Infinity, NaN, true, {}, [], new Function(), new Date(), new Error(), new String, new Boolean(), new Number(), undefined, null];

    for (var i = 0; i < values.length; i++) {
        try{
            if (map.delete(values[i])) return false;
        } catch (e) {
            return false;
        }
    }

    return true;
};
runTestCase(testcase);

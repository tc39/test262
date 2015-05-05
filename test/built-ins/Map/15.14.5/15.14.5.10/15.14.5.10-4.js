// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Map.prototype.size Size of set in forEach
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new Map();
    var myException = {};
    map.set(undefined, 0);
    map.set(1, {});
    map.set(2, new Date());
    map.set(3, +Infinity);
    try{
        map.forEach(function (val) {
            if (map.size !== 4) throw new Error();
            arguments[2].clear();
            if (map.size !== 0) throw new Error();
            throw myException;
        });
    } catch (e) {
        if (e === myException) return true;
    }

    return false;
};
runTestCase(testcase);

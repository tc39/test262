// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Set.prototype.size Size of set in forEach
includes: [runTestCase.js]
---*/

function testcase() {

    var set = new Set();
    var myException = {};
    set.add();
    set.add(1);
    set.add(2);
    set.add(3);
    try{
        set.forEach(function (val) {
            if (set.size !== 4) throw new Error();
            arguments[2].clear();
            if (set.size !== 0) throw new Error();
            throw myException;
        });
    } catch (e) {
        if (e !== myException) return false;
    }

    return true;
};
runTestCase(testcase);

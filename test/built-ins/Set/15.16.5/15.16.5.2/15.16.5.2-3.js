// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.add unique ECMAScript values are added to Set
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    var values = [1, -1, 0, Infinity, -Infinity, null, NaN, {}, '', true, false, function () { }, []];

    for (var i = 0; i < values.length; i++) {
        set.add(values[i]);
    }

    for (var i = 0; i < values.length; i++) {
        if (!set.delete(values[i])) return false;
    }

    return true;
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.delete verify return value
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();

    if (set.delete()) return false;

    set.add();
    set.add(Infinity);
    set.add(1);

    return set.delete() && set.delete(Infinity) && set.delete(1);
};
runTestCase(testcase);

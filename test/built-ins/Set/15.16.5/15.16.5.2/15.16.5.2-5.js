// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.add add undefined
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.add();
    if (set.size !== 1) return false;
    set.add(undefined);
    return set.size === 1;
};
runTestCase(testcase);

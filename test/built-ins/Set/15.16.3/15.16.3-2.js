// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new Set()
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();

    if (!(set instanceof Set) || set.size !== 0) return false;
    if (set.has(undefined) || set.has(null)) return false;
    if (set.delete(undefined) || set.delete()) return false;

    return true;
};
runTestCase(testcase);

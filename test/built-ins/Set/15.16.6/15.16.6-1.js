// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set instances are extensible dynamic objects
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();

    set.a = 1;
    if (set.a !== 1) return false;

    delete set.a;
    if (set.a !== undefined) return false;

    return true;

};
runTestCase(testcase);

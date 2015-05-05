// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.delete use dynamic keys
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.add(10);
    set.add(5);
    set.add(6);

    return set.delete(5 + 5) && set.delete(Math.sqrt(25)) && set.delete(2 * 3);
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Set.prototype.size Empty Set
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    return set.size === 0;
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.delete verify Same Value Algorithm implementation in
    delete
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.add({});
    return set.delete({})===false;
};
runTestCase(testcase);

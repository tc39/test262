// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.clear check if set reatin all properties after clear
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    set.clear();
    set.add();

    if (set.size !== 1) return false;

    var called = 0;

    set.forEach(function (val) {
        called++;
    });

    if (called !== 1) return fals;else

    return (set.delete() && set.size===0)

};
runTestCase(testcase);

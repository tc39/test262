// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach return value is undefined
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var emptyset = new Set();
    var set = new Set();
    set.add(1);

    return ((undefined === emptyset.forEach(function () { })) && (undefined === set.forEach(function () { })));

};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach return value is undefined
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var emptymap = new Map();
    var map = new Map();
    map.set(1,1);

    return ((undefined === emptymap.forEach(function () { })) && (undefined === map.forEach(function () { })));

};
runTestCase(testcase);

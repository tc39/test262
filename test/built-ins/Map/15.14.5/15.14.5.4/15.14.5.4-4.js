// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach verify thisArg is same as one passed in
    forEach
includes: [runTestCase.js]
---*/

function testcase() {
    var testfail = true;
    var map = new Map();
    var thisArg = {};

    map.set(1);
    Map.prototype.forEach.call(map, function () {
        called = true;
        if (this === thisArg) testfail = false;
    }, thisArg);

    return (!testfail);
};
runTestCase(testcase);

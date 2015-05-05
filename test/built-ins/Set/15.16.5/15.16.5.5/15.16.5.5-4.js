// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach verify thisArg is same as one passed in
    forEach
includes: [runTestCase.js]
---*/

function testcase() {
    var testfail = true;
    var set = new Set();
    var thisArg = {};

    set.add(1);
    Set.prototype.forEach.call(set, function () {
        called = true;
        if (this === thisArg) testfail = false;
    }, thisArg);

    return (!testfail) && true;
};
runTestCase(testcase);

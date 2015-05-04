// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verify for empty map
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var map = new Map();
    var thisArg = {};

    Map.prototype.forEach.call(map, function () {
        called = true;
    }, thisArg);

    return !called;
};
runTestCase(testcase);

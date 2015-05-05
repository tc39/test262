// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.get verify using eval
includes: [runTestCase.js]
---*/

function testcase() {

    var map = new WeakMap();
    var a = {};
    map.set(a, 1);
    if (map.get(eval("a")) !== 1) return false;
    return true;
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.set verify return type in undefined
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();
    return map.set({}, 1) === map;
};
runTestCase(testcase);

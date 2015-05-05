// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Check if pseudo property Object.prototype.__proto__ exists in
    strict mode
includes: [runTestCase.js]
---*/

function testcase() {
    "use strict"
    var obj = new Object();
    return obj.__proto__ !== undefined
};
runTestCase(testcase);

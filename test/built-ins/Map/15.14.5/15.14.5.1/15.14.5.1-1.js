// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Initial value of Map.prototype.constructor is the built in Map
    constructor
includes: [runTestCase.js]
---*/

function testcase() {
    return Map.prototype.constructor === Map;
};
runTestCase(testcase);

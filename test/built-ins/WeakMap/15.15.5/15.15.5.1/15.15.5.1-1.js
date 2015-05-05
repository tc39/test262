// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Initial value of WeakMap.prototype.constructor is the built in
    WeakMap constructor
includes: [runTestCase.js]
---*/

function testcase() {
    return WeakMap.prototype.constructor === WeakMap;
};
runTestCase(testcase);

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Constructor of Prototype of Set
includes: [runTestCase.js]
---*/

function testcase() {
    return Set.prototype.constructor === Set;
};
runTestCase(testcase);

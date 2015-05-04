// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object.prototype.__proto__ value is null
includes: [runTestCase.js]
---*/

function testcase() {
    return Object.prototype.__proto__ === null;
}
runTestCase(testcase);

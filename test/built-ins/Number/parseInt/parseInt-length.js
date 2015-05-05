// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Number.parseInt
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        return Number.parseInt.length === 2;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

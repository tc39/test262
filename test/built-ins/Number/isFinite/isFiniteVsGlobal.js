// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure Number.isFinite is not same as Global isFinite
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        return Number.isFinite !== isFinite;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

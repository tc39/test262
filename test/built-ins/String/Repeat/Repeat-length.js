// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat has length=1
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        return (String.prototype.repeat.length === 1);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

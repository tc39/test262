// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Make sure Number.parseFloat is on Number rather than
    Number.prototype
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        return (Object.getOwnPropertyNames(Number.prototype).indexOf("parseFloat")===-1);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

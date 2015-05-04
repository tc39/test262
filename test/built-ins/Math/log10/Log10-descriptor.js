// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing length property of Math.log10
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var desc = Object.getOwnPropertyDescriptor(Math,"log10");
        return (desc.configurable === true && desc.writable === true && desc.enumerable === false);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

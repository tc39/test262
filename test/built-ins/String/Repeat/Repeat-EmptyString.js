// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat with source string as empty string
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "";
       return str.repeat(10).length===0;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

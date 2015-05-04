// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat with special characters
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "اختبار تكرار";
        return (str.repeat(1) === str);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

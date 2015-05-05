// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: verifying isNaN on Number instead of Number prototype
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var num = new Number();
        if (num.isNaN !== undefined && Object.getOwnPropertyNames(Number.prototype).indexOf("isNaN") !== -1) {
            $ERROR("Number.isNaN should not be on the Number prototype");
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

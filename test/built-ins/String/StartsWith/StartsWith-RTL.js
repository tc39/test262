// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with a RTL language
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "اختبار تكرار";
        var searchStr = str[0]+str[1];
        return str.startsWith(searchStr);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

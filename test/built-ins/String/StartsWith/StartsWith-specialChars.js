// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with special characters
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "[[]]{}{{}}&&%$...^*#";
        for (var i in str) {
            var val = str.startsWith(str.substring(i), i);
            if (val != true) {
                $ERROR("String.prototype.startsWith gives incorrect output for: " + str[i]);
                return false;
            }
        }
        return true;
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

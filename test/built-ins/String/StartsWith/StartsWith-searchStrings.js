// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: tartsWith-searchStrings
description: String.prototype.StartsWith with different values of search strings
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "sample";
        var searchStrs = [undefined, null, "samples","samble", " sample", "\0sample", "\n\nsample", "sample" + "sample"];

        for (var i in searchStrs) {
            if (str.startsWith(searchStrs[i], 0)) {
                $ERROR("String.prototype.startsWith gives incorrect output for: " +searchStrs[i]);
                return false;
            }
        }
        var str2 = "sample\0\nsample"
        return str2.startsWith("sample", 8);
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);

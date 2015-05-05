// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.StartsWith with different values of position
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var str = "sample";
        var searchStr = "sam";
        var pos = [-0,+0,-0.9,+0.9,NaN,-10,-Infinity,null,undefined];
        for (var i in pos) {
            if (str.startsWith(searchStr, pos[i])===false) {
                $ERROR("String.prototype.startsWith gives incorrect output for: " + pos[i]);
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

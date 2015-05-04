// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    String.prototype.repeat trhows range error for count<0 and for
    +Infinity
includes: [runTestCase.js]
---*/

function testRepeatRangeError(str,count) {
    try {
        str.repeat(count);
    }
    catch (e) {
        return (e instanceof RangeError);
    }
}

function testcase() {
    try {
        var str = "sample";
        var counts = [-1, -Infinity, +Infinity];
        for (var i in counts) {
            if (testRepeatRangeError(str, counts[i])===false) {
                $ERROR("Range error is not thrown for: " + counts[i]);
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

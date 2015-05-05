// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.prototype.repeat trhows with different values of count
includes: [runTestCase.js]
---*/

function testRepeatCounts(str,count) {
    try {
        if (Number.isNaN(count)) {
            return str.repeat(count).length === 0;
        }
        return (str.repeat(count).length===(str.length*(Math.floor(Math.abs(count)))));
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}

function testcase() {
    try {
        var str = "sample";
        var counts = [-0,+0,-0.9,+0.9,1,3,11,NaN];
        for (var i in counts) {
            if (testRepeatCounts(str, counts[i])===false) {
                $ERROR("String.prototype.repeat gives incorrect output for: " + counts[i]);
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

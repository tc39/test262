// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Checking the length of Number.isNaN
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var inputs = [NaN, true, false, undefined, null, Number.POSITIVE_INFINITY,+0,-0];
        var outputs = [true, false, false, false, false, false,false,false];
        for (var i in inputs) {
            if (Number.isNaN(inputs[i]) !== outputs[i]) {
                $ERROR("Number.isNan returned incorrect values for: " + inputs[i]);
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

// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.isFinite with sample values.
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var inputs = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, NaN, "1", undefined, null, true, false, new Object(1)];
        for (var i in inputs) {
            if (Number.isFinite(inputs[i]) !== false) {
                $ERROR("Number.isFinite produces incorrect output for: " + inputs[i]);
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

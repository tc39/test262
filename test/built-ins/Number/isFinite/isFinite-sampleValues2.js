// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Number.isFinite with sample values.
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        var inputs = [Number.MAX_VALUE * 1.00001, -0.0, +0.0, 0xFFFFF, 003];
        var outputs = [false, true, true, true, true];
        for (var i in inputs) {
            if (Number.isFinite(inputs[i]) !== outputs[i]) {
                $ERROR("Number.isFinite produces incorrect output for: " + i);
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

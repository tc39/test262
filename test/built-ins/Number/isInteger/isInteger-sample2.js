// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing isInteger with sample values
includes: [runTestCase.js]
---*/

function testcase() {

        var inputs = [1.0,1.000000000000000000000000001,0xFFFFF,007,Number.MAX_SAFE_INTEGER];
        for (var i in inputs) {
            if (Number.isInteger(inputs[i])===false){
                $ERROR("Number.isInteger produces incorrect output for " + inputs[i]);
            }
        }
        return true;

}
runTestCase(testcase);

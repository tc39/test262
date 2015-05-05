// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: epsilon-Value_check
description: Testing value of Number.EPSILON
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {                         // obj,name,value,writable,enumerable,configurable
    var smaller = 2.220446049250312 - 16;
    var larger = 2.220446049250314 - 16;

    if ((1 + smaller) - 1 === Number.EPSILON) {
        $ERROR("smallest value greater than 1 is Number.EPSILON");
    }
    return dataPropertyAttributesAreCorrect(Number, "EPSILON", 2.2204460492503130808472633361816e-16, false, false, false);
}
runTestCase(testcase);

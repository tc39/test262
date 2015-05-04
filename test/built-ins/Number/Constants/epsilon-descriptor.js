// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.EPSILON
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {                         // obj,name,value,writable,enumerable,configurable
    return dataPropertyAttributesAreCorrect(Number, "EPSILON", 2.2204460492503130808472633361816e-16, false, false, false);
}
runTestCase(testcase);

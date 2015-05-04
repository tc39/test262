// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Math.trunc
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {                         // obj,name,value,writable,enumerable,configurable
    return dataPropertyAttributesAreCorrect(Math, "trunc", Math.trunc, true, false, true);
}
runTestCase(testcase);

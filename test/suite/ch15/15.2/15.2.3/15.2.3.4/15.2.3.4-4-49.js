// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-4-49
description: >
    Object.getOwnPropertyNames - own index properties of Array objcect
    are pushed into the returned Array
includes:
    - runTestCase.js
    - compareArray.js
---*/

function testcase() {
        var arr = [0, 1, 2];

        var expResult = ["0", "1", "2", "length"];

        var result = Object.getOwnPropertyNames(arr);

        return compareArray(expResult, result);
    }
runTestCase(testcase);

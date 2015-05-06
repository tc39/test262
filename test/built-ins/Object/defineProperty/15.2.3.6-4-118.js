// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-118
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', the [[Value]] field of 'desc' is absent, test
    every field in 'desc' is absent (15.4.5.1 step 3.a.i)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, "length", {});

        var verifyValue = false;
        if (arrObj.length === 0) {
            verifyValue = true;
        }

        arrObj.length = 2;
        var verifyWritable = arrObj.length === 2;

        var verifyEnumerable = false;
        for (var p in arrObj) {
            if (p === "length" && arrObj.hasOwnProperty(p)) {
                verifyEnumerable = true;
            }
        }

        delete arrObj.length;
        var verifyConfigurable = arrObj.hasOwnProperty("length");

        return verifyValue && verifyWritable && !verifyEnumerable && verifyConfigurable;
    }
runTestCase(testcase);

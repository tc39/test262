// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-4-b-3
description: >
    Object.getOwnPropertyNames - own property named empty('') is
    pushed into the returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "": "empty" };

        var result = Object.getOwnPropertyNames(obj);

        for (var p in result) {
            if (result[p] === "") {
                return true;
            }
        }

        return false;
    }
runTestCase(testcase);

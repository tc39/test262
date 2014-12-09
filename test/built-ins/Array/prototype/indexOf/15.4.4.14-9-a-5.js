// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-9-a-5
description: >
    Array.prototype.indexOf - deleted properties in step 5 are visible
    here on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = { 10: false, length: 30 };

        var fromIndex = {
            valueOf: function () {
                delete arr[10];
                return 3;
            }
        };

        return -1 === Array.prototype.indexOf.call(arr, false, fromIndex);
    }
runTestCase(testcase);

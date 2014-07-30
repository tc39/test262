// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-9-c-ii-13
description: >
    Array.prototype.reduce - callbackfn is called with 4 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            result = (prevVal === 1 && obj[idx] === curVal);
        }

        [11].reduce(callbackfn, 1);
        return result;
    }
runTestCase(testcase);

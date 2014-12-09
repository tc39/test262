// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-5-10
description: Array.prototype.some - Array Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objArray = [];

        function callbackfn(val, idx, obj) {
            return this === objArray;
        }

        return [11].some(callbackfn, objArray);
    }
runTestCase(testcase);

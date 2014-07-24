// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.18-5-17
description: Array.prototype.forEach - the JSON object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        function callbackfn(val, idx, obj) {
            result = (this === JSON);
        }

        [11].forEach(callbackfn, JSON);
        return result;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-c-i-8
description: >
    Array.prototype.every - element to be retrieved is inherited data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val !== 13;
            } else {
                return true;
            }
        }

        try {
            Array.prototype[1] = 13;
            return ![, , , ].every(callbackfn);
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);

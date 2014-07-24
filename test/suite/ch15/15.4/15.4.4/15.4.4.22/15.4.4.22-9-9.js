// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-9-9
description: >
    Array.prototype.reduceRight - modifications to length will change
    number of iterations
includes: [runTestCase.js]
---*/

function testcase() {
        var called = 0;
        function callbackfn(preVal, val, idx, obj) {
            called++;
        }

        var arr = [0, 1, 2, 3];
        Object.defineProperty(arr, "4", {
            get: function () {
                arr.length = 2;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");

        return called === 3;
    }
runTestCase(testcase);

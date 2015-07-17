// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-23
description: >
    Array.prototype.reduce - This object is the global object which
    contains index property
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 0);
            }
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 0;
            fnGlobalObject()[1] = 1;
            fnGlobalObject()[2] = 2;
            fnGlobalObject().length = 3;

            Array.prototype.reduce.call(fnGlobalObject(), callbackfn);
            return testResult;

        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[1];
            delete fnGlobalObject()[2];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);

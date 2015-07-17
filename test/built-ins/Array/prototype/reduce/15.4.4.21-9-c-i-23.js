// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-23
description: >
    Array.prototype.reduce - This object is the global object which
    contains index property
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 0;
            fnGlobalObject()[1] = 1;
            fnGlobalObject().length = 2;

            Array.prototype.reduce.call(fnGlobalObject(), callbackfn, initialValue);
            return testResult;

        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[1];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
